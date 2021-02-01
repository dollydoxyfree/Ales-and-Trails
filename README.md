# Project Overview

## Ales-and-Trails

[Ales && Trails](https://github.com/dollydoxyfree/Ales-and-Trails.git)

## Project Description

After a day of hiking and exploring the outdoors, there is nothing better than a nice cold beer.  Using the Ale's and Trails app, users will make the process of looking for a deciding on a brewery nearby.  

## API and Data Sample

[openbrewerydb.org](https://api.openbrewerydb.org/breweries?by_city=portland&by_state=oregon)

{
        "id": 5758,
        "name": "Cascade Brewing Barrel House",
        "brewery_type": "micro",
        "street": "939 SE Belmont St",
        "address_2": null,
        "address_3": null,
        "city": "Portland",
        "state": "Oregon",
        "county_province": null,
        "postal_code": "97214-2519",
        "country": "United States",
        "longitude": "-122.656005749976",
        "latitude": "45.5167536",
        "phone": "5032658603",
        "website_url": "http://www.cascadebrewing.com",
        "updated_at": "2018-08-24T15:46:08.535Z",
        "created_at": "2018-07-24T01:34:05.354Z"
    },

## Wireframes

[Ales && Trails Wireframe](https://whimsical.com/ales-trails-ETpbeYzjcrZqAyeepYaR6n)

<img width="458" alt="Screen Shot 2021-01-26 at 8 51 28 AM" src="https://user-images.githubusercontent.com/75773700/105877605-060a7500-5fb5-11eb-8c34-0cfdf4f7a2a3.png">

### MVP/PostMVP

This application will provide an input field upon loading, the user will enter their City and the output will randomize a trailhead and brewery near selected location.  This app will be geared towards phone use but will be just as clean and responsive on a desktop.  Beautiful imagery will pull the look together.

#### MVP 

- Connect to brewery API to output local brewerys to user
- Generates information within parameters specified by user input
- Responds to both cell phone and desktop screens 

#### PostMVP  

- Animation 
- Incorporate facts about hiking
- Add unique UI and event listeners

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval / Core App Structure (HTML, CSS, etc.) | Incomplete
|Jan 27| Connect to API | Incomplete
|Jan 28| Initial Clickable Model/ DOM manipulation| Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

<img width="586" alt="Screen Shot 2021-01-25 at 10 10 37 PM" src="https://user-images.githubusercontent.com/75773700/105807163-56081e00-5f5a-11eb-92f8-09c3a7b93e51.png">

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 8hrs| 5hrs | 5hrs |
| Working with API | H | 10hrs | 12hrs | 10hrs |
| DOM manipulation | H | 10hrs | 10hrs | 10hrs |
| Responsive CSS | H | 8hrs | 4hrs | 4hrs |
| Total | H | 40hrs| 31hrs | 31hrs |

## Code Snippet 
I found working with animation enjoyable and look forward to learning and advancing with keyframes techniques.
```
 @keyframes blink {
   0% {color: rgb(170, 16, 119);} 25% {color: rgb(218, 112, 209);} 50% {color: goldenrod;} 75% {color: orangered;} 100% {color:rgb(144, 0, 55);}
 }
```
 I struggle trying to understand the DOM and this bit helped me understand how to effectively append individual elements, helping me understand the bigger picture.
```
 const breweriesContainer = document.querySelector('.brew-data')
    // console.log(dataDiv)
    const breweryContainer = document.createElement('div')
    breweryContainer.classList.add('brewery')
    breweriesContainer.append(breweryContainer)
```

## Change Log
Due to the limited amount of data, I needed to switch API.  Doing so, I refocused the purpose of the app to be solely for convenience in locating a brewery within users given parameters.  