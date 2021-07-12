# Welcome to my Work Day Planner!

#### This is a web application designed using HTML, CSS, JS, JQuery and Bootstrap allowing users to schedule events during a typical workday. The app shows the current date and time and color codes time blocks based on past, present, and future. 

## Link to Deployed Site



## Table of Contents
  * [Motivation and Technologies](#motivation)
  * [Functionality](#functionality)
  * [File Architecture](#file-architecture)
  * [Usage](#usage)

## Motivation

I wanted to create a project that allows users to plan their workday easily. The app allows users to edit events for each hour of their workday, and the time blocks are colorcoded to show whether an event is in the past, present, or future (past events/hours are grey, the current hour is red, and future hours are green). 

The app saves the users scheduled events in local storage so they can navigate away from the page and still return to an accurate schedule. I used Moment to add the date and time to the top of the page, and wrote a function so the time will accurately update throughout the day. 

#### Technologies
* HTML
* CSS 
* JavaScript
* JQuery 
* Moment
* Bootstrap

## Functionality


#### The demo shows the main functions of the quiz:
* Date and time are displayed at the top of the page. 
* The time blocks are editable and can be saved in local storage. 
* The time blocks show hours past in grey, the current hour in red, and future hours in green. 
* When the page is refreshed, the saved data shows up on the page. 

## File Architecture
```
├── Assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
├── index.html
└── readme.md
```

## Usage
* Use as a simple day planner.
* Use to help you learn Moment and JQuery.
* Use to see how to easlily incorporate Bootstrap into a responsive web application. 