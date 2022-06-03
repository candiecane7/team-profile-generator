# Team Profile Generator

## Purpose
To use node.js and inquirer to build a team webpage.

## Installation
To install this application, clone the project using http or ssh link. Use command git clone in the project folder you want to use followed by the copied link. Then run npm install to install all needed dependencies.

## Usage
Run "node index" in the command line in the root folder of the project and follow the prompts. The final html file will be created in the dist folder.

## Video Walkthrough
Click here to watch a walkthrough demonstration of the application.

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Built With
- HTML
- CSS
- JS
- Node.js
- Inquirer
- Jest

## Questions
If you have any questions regarding this application, please reach out to me via <a href="mailto:hall.candice@outlook.com">email</a>
