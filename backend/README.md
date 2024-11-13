** Important: To run the project you need an .env file which is explained in the instalation section **
** Important: If this isn't the first time you run this project, please make sure to PURGE your mongoDB database of the "scrawnyGrandpaGuides" collection first.

Full Name: Anastacia Siniagovski.

This is the BACKEND ReadMe file. Please follow the instructions below.
To download the Backend folder from GitHub navigate to https://download-directory.github.io/ and paste the permalink of the Backend Folder. Hit enter t download the ZIP file.

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

    1. Download the repository folder as requested above.

    2. Install dependencies:
        npm install

    3. Create a .env file in the root of the project and fill in the variables correctly:

    (Please note that the default MongoBD used in this project is Compass and ENVIRONMENT=development is the default choice. For ATLAS usage please change ENVIROMENT=production and provide your MongoDB URI) 

    PORT = 3000
    ADMIN_EMAIL=YourAdminEmail
    ADMIN_PASSWORD=YourAdminPassword
    SECRET_WORD=YourSecretWord
    MONGODB_URI=YourAtlasDBLink
    ENVIRONMENT=development

    * "email" must be in the valid Email address form. Example: abc@abc.abc
    * "password" must be at least 7 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-

    4. Run the server
        npm run dev

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