# Project Overview

## BrewHub

[BrewHub](https://github.com/dollydoxyfree/BrewHub)

## Project Description

Search for a local brewery to satisfy the users quench or meet for events.   

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

[BrewHub](https://whimsical.com/ales-trails-ETpbeYzjcrZqAyeepYaR6n)

<img width="458" alt="Screen Shot 2021-01-26 at 8 51 28 AM" src="https://user-images.githubusercontent.com/75773700/105877605-060a7500-5fb5-11eb-8c34-0cfdf4f7a2a3.png">

### MVP/PostMVP

This application will provide a user friendly experience, allowing the user to search with ease for a brewery by city, state or zip code.  The search will provide results that contain the Brewery information such as name and address.

#### MVP 

- Connect to brewery API to output local brewerys to user
- Generates information within parameters specified by user input
- Responds to both cell phone and ipad screens, with a desktop friendly version available as well. 

#### PostMVP  

- Animation 
- connect a tags to brewery URL 
- additional advanced styling to appended search results
- Add unique UI and event listeners

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval / Core App Structure (HTML, CSS, etc.) | Complete
|Jan 27| Connect to API | Complete
|Jan 28| Initial Clickable Model/ DOM manipulation| Complete
|Jan 29| MVP | Complete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

<img width="586" alt="Screen Shot 2021-01-25 at 10 10 37 PM" src="https://user-images.githubusercontent.com/75773700/105807163-56081e00-5f5a-11eb-92f8-09c3a7b93e51.png">

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 8hrs| 5hrs | 5hrs |
| Working with API | H | 10hrs | 15hrs | 15hrs |
| DOM manipulation | H | 10hrs | 10hrs | 15hrs |
| Responsive CSS | H | 8hrs | 4hrs | 2hrs |
| Total | H | 40hrs| 31hrs | 37hrs |

## Code Snippet 
I found working with keyframes very enjoyable and look forward to advancing my skillset with additional animation techniques.
```
 @keyframes blink {
   0% {color: rgb(170, 16, 119);} 25% {color: rgb(218, 112, 209);} 50% {color: goldenrod;} 75% {color: orangered;} 100% {color:rgb(144, 0, 55);}
 }
```
 I struggled trying to understand the DOM and this bit helped me understand how to effectively append individual elements, helping me understand the bigger picture.
```
 const breweriesContainer = document.querySelector('.brew-data')
    // console.log(dataDiv)
    const breweryContainer = document.createElement('div')
    breweryContainer.classList.add('brewery')
    breweriesContainer.append(breweryContainer)
```

## Change Log
Due to the limited amount of data, I needed to switch API.  Doing so, I refocused the purpose of the app to be solely for convenience in locating a brewery within users given parameters.  The previous version would have been impossible to provide a dynamic search with the extreme limit of information provided.