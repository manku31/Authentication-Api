# Authentocation-Api

A complete example of a "CRUD" Api built with Node.js Express.js MongoDb and many more.

## Overview

### Project layout:

- `index.js`                  : Entry point of the application.
- `package.json`              : Project dependencies and metadata.
- `routes/`                   : Folder containing route handlers.
  - `index.js/`               : Hub of all router handlers.
    - `users.js`              : User-related route handlers.
- `validators/`               : Folder containing Validators middlewares.
  - `UserValidator.js`        : Validate SignUp and LogIn middleware.
- `controllers/`              : Folder containing controller logic.
  - `userController.js`       : User controller logic.
- `models/`                   : Folder containing data models.
  - `User.js`                 : User data model.
- `config/`                   : Folder containing configuration files.
  - `database.js`             : Database configuration.
  - `passport-jwt-strategy.js`: Authentication configuration.


### Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### How to Run This Project In Your System

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install
    $ npm run server

1. Clone this Repo in Your System 
2. Go to the project directory
3. create a .env file in root directory, in .env file copy this (JWT_SECRET_KEY = 'anything') 
4. Install all dependencies by typing command npm install
5. Run the Server By Typing npm run server
6. Use any Api testing Application like Postman
7. Type local host url on the Application Testing and you get the result according to given below
---

### Endpoints 

#### Express Server

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|http://localhost:8000/ | Root page |

#### User Service

|HTTP Method|URL|Description|
|---|---|---|
|`POST`|http://localhost:8000/register | Create new User |
|`POST`|http://localhost:8000/login | Login page |
|`GET`|http://localhost:8000/user/allusers | Show All User who Register |
|`GET`|http://localhost:8000/user/profile/{userId} | Show User profile(details) by ID |
|`PUT`|http://localhost:8000/user/update/{userId} | Update the user details by ID |
|`DELETE`|http://localhost:8000/user/delete/{userId} | Delete User by ID |
