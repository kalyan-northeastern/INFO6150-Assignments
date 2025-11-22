# Assignment 10 - Quick Start Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB running locally
- Two terminal windows

## Step-by-Step Instructions

### Step 1: Start MongoDB
Make sure MongoDB is running on your system:

**macOS:**
```bash
brew services start mongodb-community
# Or check if it's already running:
brew services list | grep mongodb
```

**Windows/Linux:**
- MongoDB should be running as a service, or start it manually

### Step 2: Start Backend Server

Open **Terminal 1** and run:

```bash
cd /Users/naveensubhashu/Desktop/kalyanassign7/Assignment-9/backend
npm install
npm start
```

You should see:
```
Server is running on port 3000
API Documentation available at http://localhost:3000/api-docs
```

**Keep this terminal open!**

### Step 3: Start Frontend Server

Open **Terminal 2** (new terminal window) and run:

```bash
cd /Users/naveensubhashu/Desktop/kalyanassign7/Assignment-9/frontend
npm install
npm start
```

The React app will automatically open in your browser at `http://localhost:3001`

### Step 4: Create Test Users

You need to create users with `type` field (admin or employee). Use one of these methods:

#### Option A: Using API (curl)

**Create an Admin user:**
```bash
curl -X POST http://localhost:3000/user/create \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Admin User",
    "email": "admin@example.com",
    "password": "AdminPass123!",
    "type": "admin"
  }'
```

**Create an Employee user:**
```bash
curl -X POST http://localhost:3000/user/create \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Employee User",
    "email": "employee@example.com",
    "password": "EmployeePass123!",
    "type": "employee"
  }'
```

#### Option B: Using Swagger UI
1. Go to `http://localhost:3000/api-docs`
2. Find `POST /user/create` endpoint
3. Click "Try it out"
4. Enter the JSON with `type` field:
```json
{
  "fullName": "Admin User",
  "email": "admin@example.com",
  "password": "AdminPass123!",
  "type": "admin"
}
```
5. Click "Execute"

### Step 5: Login and Test

1. **Open the frontend**: `http://localhost:3001`
2. **Login as Admin**:
   - Email: `admin@example.com`
   - Password: `AdminPass123!`
   - You'll be redirected to `/admin/employees`
   - You can see:
     - **Employees page**: List of all users
     - **Add Job page**: Create new jobs

3. **Logout and Login as Employee**:
   - Email: `employee@example.com`
   - Password: `EmployeePass123!`
   - You'll be redirected to `/home`
   - You can see:
     - **Home, About, Job Listings, Contact, Company Showcase** (from Assignment 9)
     - **Jobs page**: View jobs created by admin

## Testing Features

### Admin Features:
1. **View All Users**: Navigate to "Employees" in navbar
2. **Create Jobs**: 
   - Click "Add Job" in navbar
   - Fill in: Company Name, Job Title, Description, Salary
   - Click "Create Job"

### Employee Features:
1. **View Jobs**: Click "Jobs" in navbar to see all jobs created by admin
2. **Access Employee Pages**: Home, About, Job Listings, Contact, Company Showcase

## Important Notes

- **Role-Based Access**: Admins can only access admin pages, employees can only access employee pages
- **Redux State**: User authentication state is managed with Redux
- **Session Persistence**: Login state persists in localStorage
- **API Endpoints**:
  - `POST /user/create` - Create user (requires `type` field)
  - `POST /user/login` - Login (returns user `type`)
  - `GET /user/getAll` - Get all users (admin only, no passwords)
  - `POST /create/job` - Create job (admin only)
  - `GET /jobs` - Get all jobs (employee access)

## Troubleshooting

### Backend won't start:
- Check MongoDB is running: `mongosh` should work
- Check port 3000 is free: `lsof -i :3000`
- Check `.env` file exists in backend folder

### Frontend won't start:
- Check if port 3001 is available (React will auto-use next port)
- Make sure backend is running first
- Check `npm install` completed successfully

### Login fails:
- Make sure user exists with correct `type` field
- Check backend is running on port 3000
- Check browser console for errors

### Can't access pages:
- Make sure you're logged in with correct user type
- Admin users can only access `/admin/employees` and `/add-job`
- Employee users can only access employee pages

## Stopping Servers

Press `Ctrl + C` in each terminal window to stop the servers.

