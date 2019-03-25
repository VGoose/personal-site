---
title: How Gatsby Works
description: A middle-level overview of Gatsby's build process. 
author: Anh Vo
date: 2019-03-13T01:39:27.148Z
---
## Preface

This is a simple overview of Gatsby's build process.  It's based on [this piece](https://www.gatsbyjs.org/docs/behind-the-scenes/) of the Gatsby docs.  

## How Gatsby Generates Sites - A Middle-Level Overview

Gatsby is built upon React, Graphql, Redux, and Webpack. 

React and Graphql are used to write your pages, while Redux and Webpack are used behind the scenes to generate your static files.

When you tell Gatsby to build you site, it kicks off its build process.  This process can be split into two main phases. 

![diagram](https://i.imgur.com/FfnVU4e.png)


## Bootstrap Phase

In the Bootstrap phase, instructions on how to build your site are gathered and prepared. 

Data sourcing
  - data is sourced from APIs/CMSes/local/etc using `source plugins`
  - data is transformed to graphql consumable `nodes`
  - graphql queries you wrote are ran (page and static queries), result are stored in JSON in /public

Redux
  - redux keeps a mapping of: 
    - all the pages and their paths for your site
    - all components names and paths used to build the pages
    - paths to data (in /public) needed for each page

## site/.cache/
At the end of the Bootstrap phase, Gatsby writes to site/.cache/ 
  - mappings for the pages
  - mappings for components
  - mappings for data 

and makes it available for the webpack.

## Webpack Phase

In this phase, Gatsby uses the data made available in site/.cache/ and webpack to build the static html and the javascript app. 
  - static html files are created from your pages, components, and data\
  - the javascript app is created
    - this app runs on the client side after the html is served (this is how you can write dynamic Gatsby sites, i.e stateful components)

## Result

After the build you have static files and a javascript app that runs on clientside. The static files allow your site to load 'blazing fast.'  The javascript app allows Gatsby to run additional performance optimizations on the client as well as allows you to run dynamic logic.

## Closing

As stated above, this is a simplified overview of the build process.  Certain aspects have been omitted and/or simplified.  The goal with this article was to bridge the gap between the front page summary and the deep dive under the hood.  The diagram above is color coded to match with Gatsby's complete [look behind the scenes](https://www.gatsbyjs.org/docs/behind-the-scenes/).  

