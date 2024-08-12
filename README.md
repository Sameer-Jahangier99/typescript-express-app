# TypeScript Express App

This project is a RESTful API built with [Express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/). It serves as a backend for managing resources, featuring CRUD operations, pagination, filtering, and robust error handling.

## Features

- **TypeScript**: Ensures type safety and modern JavaScript features.
- **Express**: Fast and minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Joi**: Validation middleware for request data.
- **Pagination & Filtering**: Efficiently retrieve and filter resources.
- **Error Handling**: Consistent and customizable error handling.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (v8.x or higher) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)

## Getting Started

### 1. Clone the Repository

git clone https://github.com/Sameer-Jahangier99/typescript-express-app.git
cd typescript-express-app


### 2. Install Node Module
npm install

### 3. Set Up Environment Variables
PORT=5000
MONGO_DB_URL=your_mongodb_connection_string

### 4. Run the Application
npm run dev



## API Endpoints
### 1. Create Resource
URL: /api/resources
Method: POST
Body:
json
{
  "name": "Resource Name",
  "description": "Resource Description"
}

### 2. Get Resource by ID
URL: /api/resources/:id
Method: GET

### 3. List Resources
URL: /api/resources
Method: GET
Query Params:
name: Filter by resource name (optional)
sort: Sort by createdAt (asc or desc, optional)
page: Page number for pagination (optional)
limit: Number of resources per page (optional)

### 4. Update Resource
URL: /api/resources/:id
Method: PUT
Body:
json
{
  "name": "Updated Resource Name",
  "description": "Updated Resource Description"
}

### 5. Delete Resource
URL: /api/resources/:id
Method: DELETE

## Error Handling
The API uses a custom error-handling middleware that returns errors in a consistent structure:
json
{
  "status": 400,
  "message": "Bad Request"
}


## Folder Structure

├── src
│   ├── controllers   # Express route controllers for all the endpoints
│   ├── models        # Mongoose models
│   ├── routes        # Express route definitions
│   ├── services      # Business logic for handling requests
│   ├── validators    # Joi schema validators
│   ├── utils         # Utility functions like custom error handlers
│   └── config        # Configuration files like MongoDB connection
├── .env              # Environment variables
├── .gitignore        # Git ignore file
├── package.json      # NPM scripts and dependencies
└── README.md         # This file
