# ScrawnyGrandpa Guides

### Full-Stack Project Installation Guide:

Prerequisites

Before you begin, make sure you have the following installed on your machine:
    VSCode.
    Node.js (Recommended version: v16.x.x or later).
    MongoDB.

Installation:
1. Download the project from Github at [ScrawnyGrandpa](https://github.com/ScrawnyGrandpa/Final_Project_Fullstack/tree/main) and unzip it into your chosen folder.
2. Open the project and type the following in the Terminal. Please wait for each installation to be complete before typing in the next command:
    - npm install --prefix ./backend
    - npm install --prefix ./frontend
    - npm install
3. Create an .env file in the ./backend folder with the following variables:
    >PORT=3000
    >ADMIN_EMAIL= Your Email Here
    >ADMIN_PASSWORD= Your Password Here
    >SECRET_WORD=Your Secret Word Here
    >ENVIRONMENT=development

    Important notes:
    * "email" must be in the valid Email address form. Example: abc@abc.abc
    * "password" must be at least 7 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-
    * "port" choose your desired localhost port.
