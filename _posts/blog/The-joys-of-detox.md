---
title: The joys of Detox 
description: Getting up and running with a no-hand-holding, bare-bones testing library.    
author: Anh Vo
date: 2019-02-25T04:39:27.148Z
---
I recently started using Detox to test my react-native app.  If you’re unfamiliar, here is its description from Github: 

>Gray Box End-to-End Testing and Automation Framework for Mobile Apps

I’m finally at a point where I feel comfortable with it and can test my app consistently and effectively, avoiding some of its pitfalls and working around its quirks.  I’ll try and document the most important ones to be mindful of before using Detox.

First, a general overview of how Detox works. 

1. Javascript API.  Under the hood, it is written in C++ and Java.
2. Its core API allows you to: 
    + Find elements/components (matching) in your app

    + Perform actions on that element/component

    + Test the result against expectations. 
3. Comes with auto synchronization 
    + No sleeps to wait for data fetching/transitions! 

## Quirks with matching

Detox provides a few ways to find your components. The most useful ones are: 

+ by `testID` prop
+ by text
+ by `accesibilityLabel` prop

The `testID` prop will be your bread and butter for finding components.  However, Detox will have a lot of trouble finding components by `testID` that are:
  + nested inside multiple scrollviews
  + nested in render props (React)

Matching with text can also be reliable, however for apps built with Expo - it is not consistent.  A much more reliable way to match text is actually to match by `accesibilityLabel`. Although the docs state that this matches by the `accesibilityLabel` prop, it actually consistently matches with text.

Something all the matchers share in common is they can't match elements that briefly appear on the screen.  

One of the nicest features of Detox is its auto synchronization, but this comes at a cost.  Auto sync helps Detox wait for elements to show up on the screen.  For cases where it doesn’t wait long enough, it has fallback methods for manually waiting.  However, in the case where Detox waits too long - like when testing briefly flashing loading components - there are no utilities to help you. 

## Failure Logging

Now the biggest pain point: Detox’s test logging.  On test failure, it’ll log the entire app hierarchy tree to the console. 

Depending on your app, this could be hundreds or thousands of lines.  This makes finding out what failed and why a sizable chore.  And if you have multiple tests fail? Don’t even try. 

I was so frustrated with this I finally bit the bullet and wrote a [jest reporter for Detox](https://github.com/VGoose/detox-jest-pretty-log).  It doesn’t have all the bells and whistles of the default jest reporter but it skips the app tree! 

## Closing

At the end of the day, even with all its quirks issues, it is one of very few open source solutions in the mobile e2e testing space.  Although its core API is sparse and its documentation leaves a lot to be desired, it gets the job done - which is probably why so many developers continue to use it. 

