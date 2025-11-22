# Assignment 9 - React Job Portal with Material UI

This project contains both the backend (Assignment 8) and frontend (Assignment 9) for a complete job portal application.

## Project Structure

```
Assignment-9/
├── backend/              # Node.js/Express backend (Assignment 8)
│   ├── config/          # Database and Swagger configuration
│   ├── middleware/      # Validation and upload middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── images/          # Uploaded user images
│   ├── server.js        # Main server file
│   └── package.json     # Backend dependencies
├── frontend/            # React frontend (Assignment 9)
│   ├── src/
│   │   ├── App/         # React components
│   │   │   ├── Login/
│   │   │   ├── Navbar/
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── JobListings/
│   │   │   ├── Contact/
│   │   │   ├── CompanyShowcase/
│   │   │   └── App.js
│   │   └── services/    # API and session services
│   └── package.json     # Frontend dependencies
└── README.md
```

## Features

### Backend (Assignment 8)
- User CRUD operations
- Secure password hashing with bcrypt
- Image upload functionality
- Login endpoint for frontend authentication
- Company images endpoint for showcase
- Swagger API documentation
- CORS enabled for React frontend

### Frontend (Assignment 9)
- **Login and Session Management**: Secure login using Assignment 8 credentials
- **Five Main Pages**:
  - Home: Welcome page with overview
  - About: Information about the portal
  - Job Listings: Browse 6 job positions with skills and salary
  - Contact: Contact form
  - Company Showcase: Gallery of company images from backend
- **Material UI Components**: Modern, responsive UI
- **Protected Routes**: Session-based authentication
- **React Router**: Seamless navigation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or connection string)
- npm or yarn

## Installation

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/jobportal
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

## Running the Application

### Start Backend

```bash
cd backend
npm start
```

The backend will run on `http://localhost:3000`

### Start Frontend

```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3001` (or next available port)

## API Endpoints

### Backend Endpoints

- `POST /user/login` - Login with email and password
- `GET /user/getUsersWithImages` - Get all users with images for Company Showcase
- `POST /user/create` - Create new user
- `PUT /user/edit` - Update user
- `DELETE /user/delete` - Delete user
- `GET /user/getAll` - Get all users
- `POST /user/uploadImage` - Upload user image

### Frontend Routes

- `/` - Login page
- `/home` - Home page
- `/about` - About page
- `/job-listings` - Job listings page
- `/contact` - Contact page
- `/company-showcase` - Company showcase page

## Job Listings Data

The frontend includes 6 job listings as per Assignment 9 requirements:
1. Full Stack Developer
2. Digital Marketing Specialist
3. UX/UI Designer
4. Data Scientist
5. Customer Support Representative
6. Project Manager

Each listing includes:
- Job Title
- Description
- Required Skills
- Salary Range
- Last Updated information

## Company Showcase

The Company Showcase page fetches images from the backend. To see companies:
1. Create users in the backend using `POST /user/create`
2. Upload images for users using `POST /user/uploadImage`
3. The Company Showcase will automatically display them

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt (password hashing)
- multer (file uploads)
- swagger-ui-express (API documentation)
- validator (email validation)

### Frontend
- React 18
- React Router DOM
- Material UI (MUI)
- Axios
- Emotion (for Material UI styling)

## Session Management

- Sessions are stored in localStorage
- Login credentials are validated against Assignment 8 backend
- Protected routes require authentication
- Logout clears session and redirects to login

## Development

### Backend Development
```bash
cd backend
npm run dev  # If nodemon is installed
```

### Frontend Development
```bash
cd frontend
npm start  # Auto-reloads on changes
```

## Notes

- Make sure MongoDB is running before starting the backend
- Backend must be running for frontend login and Company Showcase to work
- Images are served from `/images` endpoint
- All routes except login are protected
- Job listings data is stored in the frontend (as per requirements)

## License

ISC

