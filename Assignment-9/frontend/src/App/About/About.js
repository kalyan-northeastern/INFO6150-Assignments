import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Welcome to our Job Portal, your one-stop destination for finding the perfect job opportunity.
            We connect talented job seekers with top companies across various industries.
          </Typography>
          <Typography variant="body1" paragraph>
            Our platform is designed to make the job search process seamless and efficient. Whether you're
            a recent graduate looking for your first job or an experienced professional seeking new
            opportunities, we have something for everyone.
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            To bridge the gap between talented individuals and great companies, making the hiring
            process more accessible and transparent for everyone involved.
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            What We Offer
          </Typography>
          <Typography variant="body1" component="ul">
            <li>Comprehensive job listings across multiple industries</li>
            <li>Company profiles and showcases</li>
            <li>Easy application process</li>
            <li>Regular updates on new opportunities</li>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;

