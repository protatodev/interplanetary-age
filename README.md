# Interplanetary Age Calculator

#### Epicodus Javascript Week 1 Project, 8.03.2018

#### By Protatodev (Thad Donaghue)

## Description

This program is designed to calculate a persons age based on the calendar year of a planet in the solar system. The program will then use this calculation to display various information to the user such as life expectancy, upcoming birthdate, etc. The focus of this project is to implement proper test driven development (TDD) using Karma and Jasmine.

## Specs

| Behavior | Input | Output | Why |
|----------|-------|--------|-----|
| Accept a users birthdate | 4/23/1979 | *No output* | Accept the age and save it in a javascript Date object. Simple to implement |
| Calculate a users age using the birthdate given | 4/23/1979 | 39 | Subtract current date from the given birthdate. Simple to implement |
| Calculate the users age on Mercury, Venus, Mars and Jupiter | 4/23/1979 | *Various* | Apply appropriate ratio to earth age calculation. Moderately difficult to implement |
| Calculate years beyond the average life expectancy a user has lived (if applicable) | 4/23/1979 | 3 | Perform calculation using either user provided statistic or various demographics. Moderately difficult to implement |
| Determine a users life expectancy on each planet based upon one or various factors | 4/23/1979 | 75 | Perform calculation using either user provided statistic or various demographics. Difficult to implement |

## Setup on OSX / Windows

* Download and install the latest version of `node.js` (see link section below)
* Clone the repository
* In a command line, navigate to the folder and run `npm install`
* From the command line, run `npm run start`

## Testing Program Functionality (Command Line)

* Using the command line, navigate to the cloned repository on your hard drive
* If you haven't run `npm install` from the cloned repository, do so now
* From the command line, run `karma init`
* From the command line, run `jasmine init` from `./node_modules/.bin` folder
* From the command line, in the root project folder, run `npm run test`

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* Javascript (ES6)
* jQuery 3.3.1
* Webpack 4
* Node.js 
* npm 
* Bootstrap 4.1.3
* Babel
* Jasmine
* Karma

## Links

* https://github.com/protatodev/interplanetary-age
* https://nodejs.org/en/

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Protatodev**