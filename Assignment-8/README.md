# Assignment 8 - RESTful APIs with Node.js, Express, and MongoDB

This project implements a RESTful API for user management and image uploads using Node.js, Express, and MongoDB.

## Features

- User CRUD operations (Create, Read, Update, Delete)
- Secure password hashing using bcrypt
- Image upload with format validation (JPEG, PNG, GIF only)
- One image per user restriction
- Comprehensive input validation
- Swagger API documentation
- Postman collection for testing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or connection string)
- npm or yarn

## Installation

1. Clone the repository or extract the project files.

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - The `.env` file is already created with default values
   - Update `MONGODB_URI` if your MongoDB is not running on `localhost:27017`
   - Default port is `3000`

4. Start MongoDB:
   - Make sure MongoDB is running on your system
   - If using a remote MongoDB, update the connection string in `.env`

## Running the Application

Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### 1. Create User
- **Endpoint:** `POST /user/create`
- **Description:** Creates a new user with validation
- **Request Body:**
  ```json
  {
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "password": "SecurePass123!"
  }
  ```
- **Validation:**
  - Email must be in valid format
  - Full name must contain only alphabetic characters
  - Password must be at least 8 characters with uppercase, lowercase, digit, and special character
- **Response:**
  - Success (201): `{"message": "User created successfully."}`
  - Error (400): `{"error": "Validation failed."}`

### 2. Update User
- **Endpoint:** `PUT /user/edit`
- **Description:** Updates user's full name and/or password
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "fullName": "Jane Doe",
    "password": "NewSecurePass123!"
  }
  ```
- **Note:** Email cannot be updated (used for identification)
- **Response:**
  - Success (200): `{"message": "User updated successfully."}`
  - Error (400): `{"error": "Validation failed."}`
  - Error (404): `{"error": "User not found."}`

### 3. Delete User
- **Endpoint:** `DELETE /user/delete`
- **Description:** Deletes a user by email
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com"
  }
  ```
- **Response:**
  - Success (200): `{"message": "User deleted successfully."}`
  - Error (404): `{"error": "User not found."}`

### 4. Get All Users
- **Endpoint:** `GET /user/getAll`
- **Description:** Retrieves all users with their details
- **Response:**
  ```json
  {
    "users": [
      {
        "fullName": "John Doe",
        "email": "john.doe@example.com",
        "password": "$2b$10$..."
      }
    ]
  }
  ```

### 5. Upload Image
- **Endpoint:** `POST /user/uploadImage`
- **Description:** Uploads an image for a user (one per user)
- **Request:** Form Data
  - `email` (string, required): User's email address
  - `image` (file, required): Image file (JPEG, PNG, or GIF only)
- **Response:**
  - Success (201): `{"message": "Image uploaded successfully.", "filePath": "/images/filename.jpg"}`
  - Error (400): `{"error": "Invalid file format. Only JPEG, PNG, and GIF are allowed."}`
  - Error (400): `{"error": "Image already exists for this user."}`
  - Error (404): `{"error": "User not found."}`

## API Documentation

Swagger documentation is available at:
```
http://localhost:3000/api-docs
```

## Testing with Postman

1. Import the Postman collection:
   - File: `Assignment-8-Postman-Collection.json`
   - Import it into Postman

2. Test all endpoints:
   - The collection includes sample requests for all endpoints
   - Update the email addresses in requests as needed
   - For image upload, select a JPEG, PNG, or GIF file

## Project Structure

```
Assignment-8/
├── config/
│   ├── database.js       # MongoDB connection
│   └── swagger.js        # Swagger configuration
├── middleware/
│   ├── validation.js    # Input validation middleware
│   └── upload.js        # Multer configuration for file uploads
├── models/
│   └── User.js          # User Mongoose model
├── routes/
│   └── userRoutes.js    # User API routes
├── images/              # Uploaded images directory (created automatically)
├── server.js            # Main server file
├── package.json         # Dependencies
├── .env                 # Environment variables
├── .gitignore          # Git ignore file
├── README.md           # This file
└── Assignment-8-Postman-Collection.json  # Postman collection
```

## Security Features

- Passwords are hashed using bcrypt before storage
- Input validation on all endpoints
- File type validation for image uploads
- Email format validation

## Error Handling

All endpoints include proper error handling with appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request (validation errors)
- 404: Not Found
- 500: Internal Server Error

## Notes

- Images are stored in the `images/` directory
- Each user can have only one image
- Passwords must meet strong password requirements
- Email addresses are stored in lowercase
- Full names are trimmed and validated for alphabetic characters only

## License

ISC

