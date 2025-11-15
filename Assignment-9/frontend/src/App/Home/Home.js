import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { getSession } from '../../services/session';

const Home = () => {
  const session = getSession();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Job Portal
        </Typography>
        {session && (
          <Typography variant="h6" color="text.secondary">
            Hello, {session.fullName}!
          </Typography>
        )}
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Find Your Dream Job
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Browse through our extensive list of job opportunities across various industries.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Explore Companies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover top companies and learn about their culture and opportunities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Get Started
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Start your job search journey today and find the perfect opportunity for you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

