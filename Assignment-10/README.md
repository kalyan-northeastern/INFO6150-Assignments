# Assignment 10 - Job Portal with Role-Based Access Control

This project contains both the backend (Assignment 8) and frontend (Assignment 9 & 10) for a complete job portal application with role-based access control (Admin and Employee roles).

## Project Structure

```
Assignment-10/
├── backend/              # Node.js/Express backend (Assignment 8)
│   ├── config/          # Database and Swagger configuration
│   ├── middleware/      # Validation and upload middleware
│   ├── models/          # Mongoose models (User, Job)
│   ├── routes/          # API routes (userRoutes, jobRoutes)
│   ├── images/          # Uploaded user images
│   ├── server.js        # Main server file
│   └── package.json     # Backend dependencies
├── frontend/            # React frontend (Assignment 9 & 10)
│   ├── src/
│   │   ├── App/         # React components
│   │   │   ├── Login/   # Login page
│   │   │   ├── Navbar/  # Navigation bar (role-based)
│   │   │   ├── Admin/   # Admin-only pages
│   │   │   │   ├── Employees/  # View all users
│   │   │   │   └── AddJob/     # Create new jobs
│   │   │   ├── Employee/       # Employee-only pages
│   │   │   │   └── Jobs/       # View all jobs
│   │   │   ├── Home/           # Employee home page
│   │   │   ├── About/          # About page
│   │   │   ├── JobListings/    # Static job listings
│   │   │   ├── Contact/        # Contact form
│   │   │   ├── CompanyShowcase/# Company images gallery
│   │   │   ├── ProtectedRoute.js # Route protection
│   │   │   └── App.js
│   │   ├── services/    # API and session services
│   │   └── store/       # Redux store and slices
│   └── package.json     # Frontend dependencies
└── README.md
```

## Features

### Backend (Assignment 8)
- User CRUD operations with role-based access (`admin` or `employee`)
- Secure password hashing with bcrypt
- Image upload functionality
- Login endpoint with role-based authentication
- Company images endpoint for showcase
- **Job Management**: Create and retrieve jobs
- Swagger API documentation
- CORS enabled for React frontend

### Frontend (Assignment 9 & 10)
- **Role-Based Authentication**: Login with `admin` or `employee` user types
- **Redux State Management**: Centralized authentication state
- **Protected Routes**: Role-based route protection
- **Admin Features**:
  - View all employees/users
  - Create new job postings
- **Employee Features**:
  - Home: Welcome page with overview
  - About: Information about the portal
  - Job Listings: Browse 6 static job positions with skills and salary
  - Jobs: View all jobs created by admin (from database)
  - Contact: Contact form
  - Company Showcase: Gallery of company images from backend
- **Material UI Components**: Modern, responsive UI
- **Session Persistence**: Login state stored in localStorage
- **React Router**: Seamless navigation with role-based routing

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
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/jobportal
```

**Note**: Make sure MongoDB is running before starting the backend server.

### 2. Frontend Setup

```bash
cd frontend
npm install
```

**Note**: The frontend requires the backend to be running for authentication and API calls to work.

## Quick Start

For detailed step-by-step instructions, see [ASSIGNMENT_10_QUICK_START.md](./ASSIGNMENT_10_QUICK_START.md)

**Quick Steps:**
1. Start MongoDB
2. Start backend: `cd backend && npm install && npm start`
3. Start frontend: `cd frontend && npm install && npm start` (in a new terminal)
4. Create users with `type` field via API or Swagger UI
5. Login and explore role-based features

## Running the Application

### Start Backend

Open **Terminal 1**:
```bash
cd backend
npm start
```

The backend will run on `http://localhost:3000`
- API Documentation: `http://localhost:3000/api-docs`
- Keep this terminal open!

### Start Frontend

Open **Terminal 2** (new terminal window):
```bash
cd frontend
npm start
```

The frontend will automatically open in your browser at `http://localhost:3001` (or next available port)

**Important**: Both servers must be running simultaneously for the application to work properly.

## API Endpoints

### Backend Endpoints

#### User Endpoints
- `POST /user/login` - Login with email and password (returns user with `type` field)
- `GET /user/getUsersWithImages` - Get all users with images for Company Showcase
- `POST /user/create` - Create new user (requires `type`: "admin" or "employee")
- `PUT /user/edit` - Update user
- `DELETE /user/delete` - Delete user
- `GET /user/getAll` - Get all users (returns users without passwords)

#### Job Endpoints
- `POST /create/job` - Create a new job (admin only)
  - Required fields: `companyName`, `jobTitle`, `description`, `salary`
- `GET /jobs` - Get all jobs (accessible by employees)

### Frontend Routes

#### Public Routes
- `/` - Login page

#### Admin Routes (requires `admin` role)
- `/admin/employees` - View all users/employees
- `/add-job` - Create new job postings

#### Employee Routes (requires `employee` role)
- `/home` - Home page
- `/about` - About page
- `/job-listings` - Static job listings page (6 predefined jobs)
- `/jobs` - Dynamic jobs page (jobs from database created by admin)
- `/contact` - Contact page
- `/company-showcase` - Company showcase page (images from backend)

## Job Management

### Static Job Listings (Assignment 9)
The `/job-listings` page displays 6 predefined job listings:
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

### Dynamic Jobs (Assignment 10)
The `/jobs` page displays jobs created by admins and stored in the database. Admins can create jobs using the "Add Job" page, and employees can view all available jobs.

## Company Showcase

The Company Showcase page fetches images from the backend. To see companies:
1. Create users in the backend using `POST /user/create`
2. Upload images for users using `POST /user/uploadImage`
3. The Company Showcase will automatically display them

## User Roles

### Admin Users
- Can access admin-only pages: Employees and Add Job
- Can create new job postings
- Can view all users in the system
- Redirected to `/admin/employees` after login

### Employee Users
- Can access employee pages: Home, About, Job Listings, Jobs, Contact, Company Showcase
- Can view all jobs created by admins
- Redirected to `/home` after login

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt (password hashing)
- multer (file uploads)
- swagger-ui-express (API documentation)
- validator (email validation)
- dotenv (environment variables)

### Frontend
- React 19
- React Router DOM v7
- Redux Toolkit (state management)
- React Redux
- Material UI (MUI) v7
- Axios (HTTP client)
- Emotion (for Material UI styling)

## Session Management

- **Redux Store**: Authentication state managed with Redux Toolkit
- **localStorage**: Session persistence across page refreshes
- **Role-Based Access**: User `type` (admin/employee) determines accessible routes
- **Protected Routes**: `ProtectedRoute` component enforces authentication and role checks
- **Auto-Redirect**: Users are redirected to appropriate default pages based on their role
- **Login Validation**: Credentials validated against backend API
- **Logout**: Clears Redux state and localStorage, redirects to login page

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

## Creating Users

When creating users via the API, you **must** include the `type` field:

```json
{
  "fullName": "Admin User",
  "email": "admin@example.com",
  "password": "AdminPass123!",
  "type": "admin"  // or "employee"
}
```

**Important**: 
- Users without a `type` field will default to `employee`
- The `type` field determines which pages users can access after login
- Use Swagger UI at `http://localhost:3000/api-docs` to create users easily

## Notes

- Make sure MongoDB is running before starting the backend
- Backend must be running for frontend login, Company Showcase, and Jobs to work
- Images are served from `/images` endpoint
- All routes except login (`/`) are protected and require authentication
- Role-based routing: Admins can only access admin pages, employees can only access employee pages
- Static job listings (6 predefined jobs) are stored in the frontend component
- Dynamic jobs are stored in MongoDB and can be created by admins
- Redux state is synchronized with localStorage for session persistence
- The frontend runs on port 3001 by default (or next available port)

## License

ISC

