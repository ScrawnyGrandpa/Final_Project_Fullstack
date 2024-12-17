# ScrawnyGrandpa Guides

### Full-Stack Project Installation Guide:

#### Prerequisites:

Before you begin, make sure you clear your local storage and have the following installed on your machine:

- [VSCode](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/prebuilt-installer) (Recommended version: v16.x.x or later)
- MongoDB

---

#### Installation:

1. Download the project from Github at [ScrawnyGrandpa](https://github.com/ScrawnyGrandpa/Final_Project_Fullstack) and unzip it into your chosen folder.
2. Open the project in VSCode and open the terminal. Install the necessary dependencies in the following order. Please wait for each installation to complete before proceeding to the next one:

    - Install backend dependencies:
      ```bash
      npm install --prefix ./backend
      ```

    - Install frontend dependencies:
      ```bash
      npm install --prefix ./frontend
      ```

    - Install root-level dependencies (this may include shared dependencies for both frontend and backend):
      ```bash
      npm install
      ```

3. Create an `.env` file in the **./backend** folder with the following variables:

    ```plaintext
    PORT=3000
    ADMIN_EMAIL=Your Email Here
    ADMIN_PASSWORD=Your Password Here
    SECRET_WORD=Your Secret Word Here
    ENVIRONMENT=development
    ```

    example:
    ```plaintext
    PORT=3000
    ADMIN_EMAIL=admin@gmail.com
    ADMIN_PASSWORD=Abcd1234!
    SECRET_WORD=justASecretWordIPicked
    ENVIRONMENT=development
    ```

    Important notes:
    - `"ADMIN_EMAIL"` must be in a valid email address format. Example: `abc@abc.abc`
    - `"ADMIN_PASSWORD"` must be at least 7 characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following special characters: `!@#$%^&*-`
    - `"PORT"`: Choose your desired localhost port (default: 3000).

4. Create an `.env` file in the **./frontend** folder with the following variables (default: 3000):
**Please make sure the VITE_APP_BACKEND_PORT is the same as the ./backend .env file PORT**

    ```plaintext
    VITE_APP_BACKEND_PORT=3000
    ```

5. To start the project, type the following command in the **root terminal**:
    
    ```bash
    npm start
    ```

    This will start both the frontend and backend, and you can access the project via your localhost address recieved froom vite (default http://localhost:5173/).
    Please make sure your MongoDB server is running in the background. If it isn't, it will cause timeout errors during project boot.

## The Project
#### API Documentation:

[Boss Documentation](https://documenter.getpostman.com/view/37787175/2sAYHzJ4Ff)

[Dungeon Documentation](https://documenter.getpostman.com/view/37787175/2sAYHzJ4Fi)

[User Documentation](https://documenter.getpostman.com/view/37787175/2sAYHzJ4Ky)

* Base URL: http://localhost:3000/ 

**Please note that this URL will change depending on the PORT you used in the .env files**
**Additionally all dungeon, user and boss IDs will be generated on your machine upon running the project for the first time. Which means the IDs present in the Postman documentation will be invalid. You will have to manually retrieve the new IDs from your MongoDB**
(You can simply use the Create endpoint in Postman to create a dummy collection)
    
    * Endpoints:
        GET /boss
        GET /boss:/id
        POST /boss
        PUT /boss/:id
        PATCH /boss/:id
        DELETE /boss/:id

        GET /dungeon
        GET /dungeon/:id
        POST /dungeon
        PUT /dungeon/:id
        PATCH /dungeon/:id
        DELETE /dungeon/:id

        GET /user
        GET /user/:id
        POST /user
        PUT /user/:id
        PATCH /user/:id
        DELETE /user/:id

### Final Project Fullstack - Technologies Used

This is a fullstack project consisting of a **frontend** and **backend** section. Below is a breakdown of the key technologies and libraries used in each section.

---

#### Backend Technologies

- **Node.js**: JavaScript runtime used for building the backend API.
- **Express.js**: Web framework to build the API and handle routing.
- **MongoDB & Mongoose**: Database and ORM for managing data storage.
- **JWT (jsonwebtoken)**: Used for secure authentication and authorization.
- **Bcryptjs**: Password hashing for secure user authentication.
- **dotenv**: Environment variable management.
- **Joi**: Data validation for requests.
- **Mongoose**: MongoDB object modeling.
- **Cors**: Middleware to enable cross-origin requests.
- **Morgan**: HTTP request logger for debugging.
- **Chalk**: For colored output in the terminal (for logging).
- **Lodash**: Utility functions for working with data structures.
- **Cross-env**: Setting environment variables across platforms.

---

#### Frontend Technologies

- **React**: Frontend library for building UI components.
- **Vite**: Next-generation build tool for fast development and bundling.
- **TailwindCSS**: Utility-first CSS framework for rapid UI design.
- **Material UI**: React component library for pre-designed UI components.
- **React Router DOM**: Routing library for navigating between pages in the app.
- **Axios**: Promise-based HTTP client for API requests.
- **JWT Decode**: Decodes JWT tokens for user session management.
- **React Markdown**: Render Markdown content in React components.
- **Emotion**: Library for writing CSS styles with JavaScript.

---

#### Development Tools

- **Nodemon**: Automatically restarts the server during development for faster iteration.
- **ESLint**: Linting tool for maintaining code quality and consistency.
- **Prettier**: Code formatter to keep the codebase clean and readable.
- **Concurrently**: Runs multiple npm scripts simultaneously (used for running both frontend and backend in development).

---

This setup combines modern JavaScript technologies to create a fast, scalable, and maintainable fullstack application.

[Site Homepage](./frontend/public/assets/homePage.png)
[Boss Page](./frontend/public/assets/raidBossPage.png)
[Dungeons Page](./frontend/public/assets/dungeonsPage.png)
[Admin Panel](./frontend/public/assets/adminPortalPage.png)
[Favorites Page](./frontend/public/assets/favsPage.png)

--- 

#### User Options

A **Non-Registered** user may do the following:

- View all available Bosses & Dungeons.

A **Registered** user may do the following:

- View all available Bosses & Dungeons.
- Access all available Bosses & Dungeons via the User Menu.
- Add and Remove Bosses & Dungeons to Favorites. 
- Edit own user profile.

An **Admin** user may do the following:

- View all available Bosses & Dungeons.
- Access all available Bosses & Dungeons via the User Menu.
- Add and Remove Bosses & Dungeons to Favorites. 
- Edit own user profile.
- Create, Delete and Edit all Bosss & Dungeons.
- Create, Delete and Edit all Boss Strategy-Guides.
- Have access to the CRM panel (Admin Portal) which grants quick access to all of the above.