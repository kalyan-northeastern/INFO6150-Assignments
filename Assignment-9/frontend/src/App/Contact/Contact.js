import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" size="large">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="h6" gutterBottom>
            Other Ways to Reach Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: contact@jobportal.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: +1 (555) 123-4567
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: 123 Job Street, Career City, CC 12345
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;

