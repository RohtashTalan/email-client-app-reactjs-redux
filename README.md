# Email Client App using Reactjs and Redux

## Problem Statement
 - build Email Client App using Reactjs and Redux
 - upon click screen will be divided into master slave format
 - user can filter by clicking on filter button
 - save read and favourite into `SessionStorage`


## Live link : [Live link](https://client-email-app.netlify.app/)


![image](https://img.shields.io/badge/Developed_by-Rohtash_Talan-9e3ed2)
## Approch:
    - Created basic React App
    - created 3 components in `Components` Folder name filter, body, list
    - installed redux and react-redux from npm
    - created actions for filter and email open
    - created 2 reducers email-reducer, filter-reducer
    - created store and then intergrated it in root `index.js` file in `src` folder
    - intergrated redux into components
    - Then based on click stated them to act 
    - onClick of email and favorite button started adding them into session storage
    - click on filter will show only emails which are in the selected filter 
    - on refress all email will be showed to user  and filter will be unselected

## Technology used
![image](https://img.shields.io/badge/Reactjs-blue)
![image](https://img.shields.io/badge/Redux-red)
![image](https://img.shields.io/badge/Axios-453ed2)
![image](https://img.shields.io/badge/Vanila_CSS-html-000ce2)


## Demo Video
![demo video](assests/demo-gif.gif)



