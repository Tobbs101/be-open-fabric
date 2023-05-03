# Backend - Open Fabric Test

This is a backend application written in Node.js using Express and PostgreSQL database. The application performs authentication and CRUD (Create, Read, Update, and Delete) operations on products.

## Setup

- Clone the repository.
- Run npm install to install all dependencies.
- Set up the PostgreSQL database and update the .env file with your database credentials.
- Run npm start to start the server.

## Endpoints

### Authentication

POST `/api/v1.0/user/create`

- Registers a new user.
- Request body: `{"firstName": string,"lastName":string,"email":string,"password":string}`.
- Response: `{"message":string,"token":string}`.

To use this project, follow these steps:

- Clone this repository to your local machine using git clone https://github.com/Tobbs101/bera-test.git.
- Navigate to the project directory with cd book-gallery.
- Install dependencies using `npm install`.
- Start the development server using `npm start`.
