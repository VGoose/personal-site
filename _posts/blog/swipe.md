---
title: Imitating NYer Today's realistic swipe deck with React-Native PanResponder
description: Realistic animations with React Native Gesture Responders
author: Anh Vo
date: 2019-03-01T04:39:27.148Z
---

The New Yorker's IOS app "NYer Today" has the most satisfying card swipe animation I've ever used.

  ![Demo](https://i.imgur.com/GJTrbYc.gif)

Look at that subtle offset. The tasteful responsiveness. Oh my God. It even rotates.

So - how is it so satisfying? After close study, here are the key features that makes it so smooth:
1. **The rotation feels natural, the card spins on it's center like how you would expect.**
2. **The card swipe criteria is dependent on gesture speed, not travel distance.**
3. **Each card has a unique offset, adding to the realism of the deck**

Now that we've identified each feature, let's try to implement them.

What follows is rough, incomplete, pseudo code that shows how these features work. If you want to see the functioning code, I've made a library called [react-native-realistic-swiper-deck](https://www.npmjs.com/package/react-native-realistic-deck-swiper) with a working example.


---

## 1. The Rotation

The key feature of this swipe deck is the rotation. To make it respond like it does, the rotation must depend on the gesture travel, AND the location of the gesture relative to the center of the card.

If we think of the gesture and its position to the center of the card as vectors, we can take advantage of a calculus' [cross product](https://github.com/VGoose/react-native-realistic-deck-swiper) to calculate the rotation. Cue napkin diagram:

![napkin](https://imgur.com/AcQbAuU.png)


```javascript
//cross product for vectors in XY plane
const rotation = x * dy - y * dx
```
If you're unfamiliar with the cross product, imagine a clock.  The hands are always moving clockwise, but depending on what time it is, that could mean up, down, left, or right. In our case, the user could start their gesture anywhere on the card.  Swiping left at the 12-o'clock position is counter-clockwise spin but at the 6-o'clock position that's clockwise!  Where the cross product comes in handy is that no matter which position the gesture started, it will correctly calculate the spin direction.

For our 2-dimension case, the cross product will always give us a vector whose **direction** is in the +Z or -Z direction (either into-the-screen or out-of-the-screen). We'll assign +Z to counter-clockwise, and -Z to clockwise.    

We can use the cross product **magnitude** to determine the amount of rotation. Conveniently most phone screens have a lot of pixels so the magnitude range is large. On an iPhone 6, the magnitude can go up to 25000. This will allow us to detect very fine changes - mapping it to 360 degrees, we'll be able to respond to changes in rotation as small as 0.014 degrees - this will make the animation very smooth.

Now to apply it to React-Native, we'll use React-Native's [PanResponder](https://facebook.github.io/react-native/docs/panresponder). It's a wrapper for the more generic [Gesture Responder System](https://facebook.github.io/react-native/docs/gesture-responder-system). PanResponder allows us to write callbacks for when a gesture moves, and when the gesture releases.  Along with the raw event, it provides a convenient `gestureState` object that has convenient distance and velocity properties.

```javascript
//pseudo code
initializePanResponder = () => {
  this.panResponder = PanResponder.create({
    onPanResponderMove: (e, gestureState) => { },
    onPanResponderRelease: (e, gestureState) => { }
  }
}
```
In our gesture move callback, we'll need to calculate the position of the gesture, relative to the card center.
```javascript
const {moveX, moveY} = gestureState
let x = moveX - cardCenter.x
let y = moveY - cardCenter.y
```
We're given dx and dy (gesture distance) from `gestureState`.  We can now calculate the rotation with the cross product formula. 
```javascript
//pseudo code
onPanResponderMove: (e, gestureState) => {
  const { moveX, moveY, dx, dy } = gestureState
  const { cardCenter } = this.state
  let x = moveX - cardCenter.x
  let y = moveY - cardCenter.y

  let rotation = x * dy - y * dx
  this.rotation.setValue(rotation)
},
```
## 2. The Swipe Release

We can use gestureState's vx and vy properties to determine whether the card swipes or not. Only swiping if the velocity is high enough.  This is a subtle change, but one that feels very natural - it promotes users to 'flick' to swipe the cards. 

In addition, we'll need to drive the rotation value after finger release. Right now it's only driven by the gesture distance, as soon as the user removes his/her finger, no rotation! We need to calculate some interpolated values using the gesture speed and use it to artificially drive the rotation value.

We'll apply this to panResponder's `onPanResponderRelease` callback:

```javascript
//pseudo code
onPanResponderRelease: (e, gestureState) => {
  const { moveX, moveY, dx, dy, vx, vy } = gestureState
  const { cardCenter, currentIndex } = this.state
  let x = moveX - cardCenter.x
  let y = moveY - cardCenter.y
  let rotation0 = x * dy - y * dx
  //interpolated value based on gesture speed 
  let rotationT = (x * vy - y * vx) * animationDuration
  const finalRotation = rotation0 + rotationT
  const vMagnitude = Math.sqrt(vx * vx + vy * vy)
  if (vMagnitude > velocityThreshold) {
    //card is swiped!
  }
  else {
    //reset the card back to the top of the deck
  }
},
```

## 3. The Offsets
Lastly, the inital offsets of the card.  A small but important piece of making the deck feel real. We can have an offset property that keeps track of all card offsets, and even make it so they're all unique so the cards don't overlap.
```javascript
//pseudo code
this.cardOffsets = [randomDegree, randomDegree, randomDegree]
```
After each swipe we'll update the offsets:
```javascript
//pseudo code
this.cardOffsets = [...this.cardOffsets.slice(1), newRandomDegree]
```
adding a new random degree to the last card.

## Closing
Important final caveat:
```javascript
transform: [ translate: //, rotate: //]  
```
and
```javascript
transform: [ rotate: //, translate: //]
```
are very different.
The first will give you what you want (think frisbee flying).
The second (think spiraling kite) will make you doubt and inspect your half-remembered calculus for a whole day.
