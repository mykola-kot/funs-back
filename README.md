# Simple App

This repository contains the solution for the test assignment.

## Important Note

Before completing the task, please understand that it is **not necessary** to complete the entire task. Building the foundation of the application and describing all components and methods is sufficient.

Additionally, be prepared to explain during the technical interview how the application operates.

## Task Description

The code should be available on GitHub for review. The task involves building a simple server-side application according to the following requirements:

### Requirements:
- **Framework**: NestJS
- **Node.js version**: v20.10.0
- **Database**: MySQL
- **ORM**: Sequelize

### Functionality:
The application should provide a simple REST API with the following functionality:
- **POST** request to save data in the database and log it to the console.
- **GET** request to retrieve data from the database.

### Endpoints:
- `POST /api/v1/add-user`: Sends random data (name, email, phone) and saves it in the database.
- `GET /api/v1/get-user/:id`: Retrieves user data from the database by user ID.

### Authorization:
All requests should be authorized using a **JWT token** in the HTTP header.

## Project setup

```bash
$ npm install

# .env file
$ cp .env.example .env
```

## Compile and run the project

```bash
# migration
$ npm run migration:up

# seed
$ npm run db:seed

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```