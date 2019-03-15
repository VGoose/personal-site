---
title: The joys of Detox 
description: Getting up and running with Detox
author: Anh Vo
date: 2019-03-15T04:39:27.148Z
---
I recently started using Detox to test my react-native app.  If you’re unfamiliar, here is its description from Github: 
Gray Box End-to-End Testing and Automation Framework for Mobile Apps

I’m finally at a point where I feel comfortable with it and can test my app consistently and effectively, avoiding some of its pitfalls and working around its quirks.  I’ll document them here so whoever reads this doesn’t have to suffer as I did.  

First, a general overview of how Detox works.  Its core API allows you to find elements/components (matching) in your app, perform actions on that element/component, and then test the results with a handful of expectations. Along with a few other utilities, you’re set to mimic user interactions with your app!  And the best part - it has auto synchronization, which means no manual sleeps to wait for data fetching! 

## Up and running

This can be surprisingly hard.  Especially if you’re trying to test a non-standard build (like an app built with Expo).  The docs are a little bare, outdated, and a small team means pull requests to update them take a while (personal experience).  StackOverflow is your friend here. There are a few traps you have to get through before getting your first test to run - getting that initial test failure message is an actual accomplishment. 

## Quirks with matching

Detox provides a few ways to find your components (I’ll use this interchangeably with element).  The TestID prop will be your bread and butter for finding components.  However, in some cases, it will refuse to match and make you want to pull your hair out.  Detox will have a lot of trouble finding components by TestID that are nested inside multiple scrollviews or nested in render props - you’ll have to use an alternative matcher for these cases.

It also does not match by text very well, especially on Expo builds.  A much more reliable way to match text is actually to match by label. Although the docs state that match by label is used for components with the accesibilityLabel prop, it actually hits text as well. 

Matching elements that briefly appear on the screen is also an issue.  One of the nicest features of Detox is its auto synchronization, but this comes at a cost.  Detox will correctly wait most of the time for the element to show up.  For cases where it doesn’t wait long enough, it has helper methods for manually waiting.  However, in the case where Detox waits too long - like when testing briefly flashing loading components - there are no utilities to help you. 

Actions and expectations are pretty bare.  However, they cover almost every way a user could interact with or experience an app.   You might have to write a few custom throws in your tests but for the most part, Detox has you covered for actions and expectations.

Now the biggest pain point: Detox’s test logging.  On test failure, it’ll log the entire app element tree to the console.  Depending on your app, this could be hundreds or thousands of lines.  This makes finding out what failed and why a sizable chore.  And if you have multiple tests fail? Don’t even try.  I was so frustrated with this I finally bit the bullet and wrote a jest reporter for Detox.  It doesn’t have all the bells and whistles of the default reporter but it skips the app tree! https://github.com/VGoose/detox-jest-pretty-log
 
At the end of the day, it’s a great open source framework that is worked on by a handful of dedicated volunteers.  It helps you do end to end testing conveniently, but doesn’t hold your hand along the way.  While there are shortcomings with documentation and developer experience - it provides a solution worth suffering for. 

