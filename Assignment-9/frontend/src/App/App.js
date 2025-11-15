import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import JobListings from './JobListings/JobListings';
import Contact from './Contact/Contact';
import CompanyShowcase from './CompanyShowcase/CompanyShowcase';
import ProtectedRoute from './ProtectedRoute';
import { isAuthenticated } from '../services/session';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated() ? <Navigate to="/home" replace /> : <Login />
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Home />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <About />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/job-listings"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <JobListings />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Contact />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-showcase"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <CompanyShowcase />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

