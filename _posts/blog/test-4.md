---
title: Lying to users
description: A dive into user experience.
author: Anh Vo
date: 2019-01-12T01:39:27.148Z
---

--Don't make me think
  - don't make them think
  - users attention is fickle - user's scan 
  - users usually in a hurry
  - guessing is more fun
  - make choices mindless
  - don't make users make difficult choices - usually means you make it for them

Mobile 
  - limited real estate 

Something I ran into ... One of the less documented parts about making software is how truthful the software is 
to the audience.  

With no UX background and only apps that I enjoy using as a reference, I started making my own app..

It's a problem I faced when I built my application.  Because of the nature of the data, I had to make tough decisions on how transparent I was with the user.
Once I got the app together and running, I quickly and repeatedly ran into the question of how truthful should I be to the user? 

> I realized UX experience often comes at huge costs.  These costs often are lies and omissions to the user. 

> The crux of the problem seems to be it's very hard to be truthful to your users if you want them to use your app. It's a very fine line. 

Depending on the nature of your app, a user could be heading out to a day that's 0.2 F warmer than he expected, or selling a 1000 shares of a stock for a lower price than they expected. 

  - should I show you stale data?
  - should I show you a loading screen? 
  - should I refresh data in the background? How often? 

You could be completely truthful to the user - but that's too many decisions.  All you would have left are power users. 

Apps/Websites I enjoy using: 
  - clear and concise
  - little decision making / settings
  - clear direction / path
Trying to apply it to my own app, I realized how opinionated this process actually is.


  - How often do you update stock prices?  This affects real $ that a user is buying/selling
  - How often do you rehydrate data, when the fetch is expensive? 
    - User battery 

Is the data critical to the use?
  - will the user be making decisions based on this?
  - how will they be affected if the data is wrong?
  - less work but there's a responsibility 
What are the costs of being truthful? 
  - server costs
  - user experience - loading, too many settings/widgets
  - bloat/clutter, turn users off
  - more work as a developer
  



