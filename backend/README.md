** To run the project you need an .env file which is explained in the instalation section **

Full Name: Anastacia Siniagovski 
ID: 317261147 
Phone: 050-2212-773

This is the BACKEND ReadMe file. Please follow the instructions below.
To download the Backend folder from GitHub navigate to https://download-directory.github.io/ and paste the following URL into the text box https://github.com/ScrawnyGrandpa/Final_Project_Fullstack/tree/0e113bde919086e88b72b863b5b28ae54fc55a2e/backend , and hit enter .

Bosses, Trash and Users API

Overview

This backend API provides a database containing information about Bosses, Trash monsters, and User account details. It supports all REST API options and is built using Node.js, Express, and MongoDB.

Features

    * Data Management: Manage Bosses, Trash monsters, and User accounts.
    * RESTful API: Fully functional REST API for CRUD operations.
    * User Authentication: Secure user authentication using JWT and bcrypt.

Technologies Used

    * Node.js
    * Express
    * MongoDB
    * Dependencies:
        - bcryptjs: For password hashing
        - chalk: For colored console logs
        - config: For configuration management
        - cors: For enabling Cross-Origin Resource Sharing
        - cross-env: For setting environment variables
        - dotenv: For managing environment variables
        - express: Web framework for Node.js
        - joi: For data validation
        - jsonwebtoken: For user authentication
        - lodash: Utility library for JavaScript
        - mongodb: MongoDB driver for Node.js
        - mongoose: MongoDB object modeling tool
        - morgan: HTTP request logger middleware
        - nodemon: Tool for automatically restarting the server during development

Getting Started

Prerequisites

    * Node.js (v14 or higher)
    * MongoDB

Installation

    1. Download the repository folder (via the instructions above, below the student information):
        https://github.com/ScrawnyGrandpa/Final_Project_Fullstack/tree/main/backend

    2. Install dependencies:
        npm install

    3. CREATE A .env FILE IN THE ROOT OF THE PROJECT AND ADD YOUR ENVIRONMENT VARIABLES:

    (Please note that the default MongoBD used in this project is Compass and ENVIRONMENT=development is the default choice. For ATLAS usage please change ENVIROMENT=production and provide your MongoDB URI) 

    PORT = 3000
    ADMIN_EMAIL=YourAdminEmail
    ADMIN_PASSWORD=YourAdminPassword
    SECRET_WORD=YourSecretWord
    MONGODB_URI=
    ENVIRONMENT=development

    * "email" must be in the valid Email address form. Example: abc@abc.abc
    * "password" must be at least 7 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-

    4. Run the server
        nodemon app

API Documentation:

Boss Documentation - https://documenter.getpostman.com/view/37787175/2sAXxWbVSP

Trash Documentation - https://documenter.getpostman.com/view/37787175/2sAXxWbVSX

User Documentation - https://documenter.getpostman.com/view/37787175/2sAXxWbVWo

    * Base URL: http://localhost:3000/
    * Endpoints:

        GET /boss
        GET /boss:/id
        POST /boss
        PUT /boss/:id
        PATCH /boss/:id
        DELETE /boss/:id

        GET /trash
        GET /trash/:id
        POST /trash
        PUT /trash/:id
        PATCH /trash/:id
        DELETE /trash/:id

        GET /user
        GET /user/:id
        POST /user
        PUT /user/:id
        PATCH /user/:id
        DELETE /user/:id