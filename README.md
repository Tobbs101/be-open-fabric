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

POST `/api/v1.0/user/login`

- Logs in a user.
- Request body: `{"email":string,"password":string}`.
- Response: `{"message":string,"token":string}`.

### Products

GET `/api/v1.0/product/all`

- Retrieves all products.
- Response: `[{"id":number,"productName":string,"productDescription":string,"productPrice":number,"productAvailable":boolean,"createdAt": date, "updatedAt": date}]`.

GET `/api/v1.0/product/:id`

- Retrieves a single product by ID.
- Response: `[{"id":number,"productName":string,"productDescription":string,"productPrice":number,"productAvailable":boolean,"createdAt": date, "updatedAt": date}]`.

POST `/api/v1.0/product`

- Createsa a new product.
- Request body: `[{"id":number,"productName":string,"productDescription":string,"productPrice":number,"productAvailable":boolean}]`.
- Response: `{ "message": string, "product": { "id":number,"productName":string,"productDescription":string,"productPrice":number,"productAvailable":boolean, "createdAt": date, "updatedAt": date } }`.

PUT `/api/v1.0/product/:id`

- Updates a product by ID.
- Request body: `[{"id":number,"productName":string,"productDescription":string,"productPrice":number,"productAvailable":boolean}]`.
- Response: `{ "message": string, "product": { "id":number,"productName":string,"productDescription":string,"productPrice":number,"productAvailable":boolean, "createdAt": date, "updatedAt": date } }`.

DELETE `/api/v1.0/product/:id`

- Deletes a product by ID.
- Response: `{"message":string}`.
