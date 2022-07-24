# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## npm start

To run run the project type npm start in the CLI. The app runs in port 3000 by default.

## npm install

Type npm install to install dependencies.

## description of the project

The project uses React, Redux, Typescript, scss, react icons for icons, react toastify for notifications;
The small app contains 4 pages where you can purchase tickets.
In the first page you can add tickets to the card, I use redux for storing these additions, the second page summarizes the first page's actions.
The third page is a user form, I do not use any kind of predefined libraries for it, but it still validates and do not allow to the next step if the input fields are not filled.
In the last page you can print or send the tickets (a small icon appears if the action happened). If all the tickets are printed or sent you can start the whole process with a new client.
