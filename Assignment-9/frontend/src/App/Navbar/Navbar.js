import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { clearSession } from '../../services/session';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    clearSession();
    navigate('/');
  };

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Job Listings', path: '/job-listings' },
    { label: 'Contact', path: '/contact' },
    { label: 'Company Showcase', path: '/company-showcase' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              onClick={() => navigate(item.path)}
              variant={location.pathname === item.path ? 'outlined' : 'text'}
            >
              {item.label}
            </Button>
          ))}
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

