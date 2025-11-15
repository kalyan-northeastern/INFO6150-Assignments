# Assignment 9 - Setup and Run Instructions

## Prerequisites

Before starting, ensure you have:
- Node.js (v14 or higher) installed
- MongoDB running on your system
- npm (comes with Node.js)

## Step-by-Step Setup

### Step 1: Verify MongoDB is Running

First, make sure MongoDB is running on your system:

**On macOS:**
```bash
# Check if MongoDB is running
brew services list | grep mongodb

# If not running, start it:
brew services start mongodb-community
```

**On Windows:**
- MongoDB should start automatically as a service
- Or start it manually from Services

**On Linux:**
```bash
sudo systemctl status mongod
# If not running:
sudo systemctl start mongod
```

### Step 2: Navigate to Assignment-9 Directory

Open your terminal and navigate to the Assignment-9 folder:

```bash
cd /Users/naveensubhashu/Desktop/kalyanassign7/Assignment-9
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

This will install all required packages for the backend (Express, Mongoose, bcrypt, etc.)

### Step 4: Configure Backend Environment

Check if the `.env` file exists in the backend folder. If it doesn't exist or needs updating:

```bash
# The .env file should contain:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/jobportal
```

You can edit it with:
```bash
nano .env
# or
open -e .env
```

### Step 5: Start the Backend Server

```bash
# Make sure you're in the backend directory
cd /Users/naveensubhashu/Desktop/kalyanassign7/Assignment-9/backend

# Start the server
npm start
```

You should see:
```
Server is running on port 3000
API Documentation available at http://localhost:3000/api-docs
```

**Keep this terminal window open!** The backend needs to keep running.

### Step 6: Open a New Terminal Window

Open a **new terminal window** (keep the backend running in the first terminal).

### Step 7: Install Frontend Dependencies

In the new terminal:

```bash
cd /Users/naveensubhashu/Desktop/kalyanassign7/Assignment-9/frontend
npm install
```

This will install all required packages for the React frontend (React, Material UI, Axios, React Router, etc.)

### Step 8: Start the Frontend Development Server

```bash
# Make sure you're in the frontend directory
cd /Users/naveensubhashu/Desktop/kalyanassign7/Assignment-9/frontend

# Start the React app
npm start
```

The React app will:
- Start on `http://localhost:3001` (or next available port)
- Automatically open in your browser
- Hot-reload when you make changes

### Step 9: Access the Application

Once both servers are running:

1. **Frontend**: Open `http://localhost:3001` in your browser
2. **Backend API**: Available at `http://localhost:3000`
3. **API Documentation**: Available at `http://localhost:3000/api-docs`

## Quick Start (All Commands)

If you want to run everything quickly, here are all commands in sequence:

### Terminal 1 (Backend):
```bash
cd /Users/naveensubhashu/Desktop/kalyanassign7/Assignment-9/backend
npm install
npm start
```

### Terminal 2 (Frontend):
```bash
cd /Users/naveensubhashu/Desktop/kalyanassign7/Assignment-9/frontend
npm install
npm start
```

## Testing the Application

### 1. Create a Test User (Optional)

If you don't have a user yet, you can create one using the API:

**Using curl:**
```bash
curl -X POST http://localhost:3000/user/create \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "password": "SecurePass123!"
  }'
```

**Or use Postman:**
- Import `backend/Assignment-8-Postman-Collection.json`
- Use the "Create User" endpoint

### 2. Login to the Frontend

1. Open `http://localhost:3001` in your browser
2. You'll see the Login page
3. Enter the email and password you created
4. Click "Login"
5. You'll be redirected to the Home page

### 3. Navigate Through Pages

After logging in, you can:
- Click "Home" in the navbar
- Click "About" to see about information
- Click "Job Listings" to see 6 job positions
- Click "Contact" to see the contact form
- Click "Company Showcase" to see company images (if any users have uploaded images)

### 4. Upload Company Images (Optional)

To see companies in the Company Showcase:

1. Use the backend API to upload an image for a user:
```bash
curl -X POST http://localhost:3000/user/uploadImage \
  -F "email=john.doe@example.com" \
  -F "image=@/path/to/your/image.jpg"
```

2. Refresh the Company Showcase page to see the image

## Troubleshooting

### Backend Issues

**Problem: "Cannot connect to MongoDB"**
- Solution: Make sure MongoDB is running
- Check: `mongosh` or `mongo` command should work

**Problem: "Port 3000 already in use"**
- Solution: Change PORT in `.env` file or stop the process using port 3000
- Find process: `lsof -i :3000`
- Kill process: `kill -9 <PID>`

**Problem: "Module not found"**
- Solution: Run `npm install` again in the backend directory

### Frontend Issues

**Problem: "Cannot connect to backend"**
- Solution: Make sure backend is running on port 3000
- Check: Open `http://localhost:3000` in browser

**Problem: "Port 3001 already in use"**
- Solution: React will automatically use the next available port (3002, 3003, etc.)
- Or stop the process using port 3001

**Problem: "CORS error"**
- Solution: Make sure backend CORS is configured correctly
- Check: Backend `server.js` should have CORS middleware

**Problem: "Login fails"**
- Solution: Make sure you have created a user in the backend
- Check: Backend is running and accessible
- Verify: Email and password are correct

## Stopping the Servers

To stop the servers:
- **Backend**: Press `Ctrl + C` in the backend terminal
- **Frontend**: Press `Ctrl + C` in the frontend terminal

## Development Tips

1. **Backend Auto-reload**: Install nodemon for auto-reload:
   ```bash
   cd backend
   npm install -g nodemon
   # Then use: nodemon server.js
   ```

2. **Check Backend Logs**: Watch the backend terminal for API requests and errors

3. **Browser DevTools**: Use browser console (F12) to see frontend errors

4. **API Testing**: Use Swagger UI at `http://localhost:3000/api-docs` to test endpoints

## File Structure Reminder

```
Assignment-9/
├── backend/          # Run: npm install && npm start
└── frontend/         # Run: npm install && npm start
```

## Need Help?

- Check the main `README.md` for detailed documentation
- Review `backend/README.md` for backend-specific info
- Check Swagger docs at `http://localhost:3000/api-docs`
- Review browser console for frontend errors
- Check backend terminal for server errors

