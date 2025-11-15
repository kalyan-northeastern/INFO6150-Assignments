import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Alert,
} from '@mui/material';
import { getUsersWithImages } from '../../services/api';

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await getUsersWithImages();
        setCompanies(response.companies || []);
        setError('');
      } catch (err) {
        setError(err.error || 'Failed to load companies');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const API_BASE_URL = 'http://localhost:3000';

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Company Showcase
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Explore our partner companies and their profiles
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && companies.length === 0 && (
        <Alert severity="info" sx={{ mb: 4 }}>
          No companies with images found. Please upload images in Assignment 8 backend.
        </Alert>
      )}

      <Grid container spacing={3}>
        {companies.map((company, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`${API_BASE_URL}${company.imagePath}`}
                alt={company.fullName}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {company.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {company.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompanyShowcase;

