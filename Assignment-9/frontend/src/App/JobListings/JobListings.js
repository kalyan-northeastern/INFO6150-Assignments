import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
} from '@mui/material';

// Job posts data from Assignment 9 requirements
const jobPosts = [
  {
    id: 1,
    title: "Full Stack Developer",
    description:
      "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    salary: "$80,000 - $120,000",
    lastUpdated: "Last updated 2 days ago",
    applyLink: "https://example.com/apply/full-stack-developer",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    description:
      "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
    skills: ["SEO", "SEM", "Social Media", "Analytics"],
    salary: "$50,000 - $75,000",
    lastUpdated: "Last updated 1 day ago",
    applyLink: "https://example.com/apply/digital-marketing-specialist",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    description:
      "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    salary: "$60,000 - $90,000",
    lastUpdated: "Last updated 4 hours ago",
    applyLink: "https://example.com/apply/ux-ui-designer",
  },
  {
    id: 4,
    title: "Data Scientist",
    description:
      "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
    skills: ["Python", "R", "Machine Learning", "SQL"],
    salary: "$90,000 - $130,000",
    lastUpdated: "Last updated 3 days ago",
    applyLink: "https://example.com/apply/data-scientist",
  },
  {
    id: 5,
    title: "Customer Support Representative",
    description:
      "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
    skills: ["Communication", "Problem Solving", "CRM", "Customer Service"],
    salary: "$35,000 - $50,000",
    lastUpdated: "Last updated 6 hours ago",
    applyLink: "https://example.com/apply/customer-support-representative",
  },
  {
    id: 6,
    title: "Project Manager",
    description:
      "Guide and coordinate project teams to ensure successful project delivery. Strong organizational and leadership skills are required.",
    skills: ["Agile", "Scrum", "Leadership", "Project Management"],
    salary: "$70,000 - $100,000",
    lastUpdated: "Last updated 1 week ago",
    applyLink: "https://example.com/apply/project-manager",
  },
];

const JobListings = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Job Listings
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Explore our current job openings and find your next opportunity
      </Typography>

      <Grid container spacing={3}>
        {jobPosts.map((job) => (
          <Grid item xs={12} md={6} key={job.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Required Skills:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {job.skills.map((skill, index) => (
                      <Chip key={index} label={skill} size="small" color="primary" variant="outlined" />
                    ))}
                  </Box>
                </Box>
                <Typography variant="h6" color="primary" gutterBottom>
                  {job.salary}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {job.lastUpdated}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobListings;

