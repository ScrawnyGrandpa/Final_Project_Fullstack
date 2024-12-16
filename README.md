# ScrawnyGrandpa Guides

### Full-Stack Project Installation Guide:

#### Prerequisites:

Before you begin, make sure you clear your local storage and have the following installed on your machine:

- [VSCode](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/prebuilt-installer) (Recommended version: v16.x.x or later)
- MongoDB

#### Installation:

1. Download the project from Github at [ScrawnyGrandpa](https://github.com/ScrawnyGrandpa/Final_Project_Fullstack/tree/main) and unzip it into your chosen folder.
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
