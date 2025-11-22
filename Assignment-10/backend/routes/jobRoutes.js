const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

/**
 * @swagger
 * /create/job:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - companyName
 *               - jobTitle
 *               - description
 *               - salary
 *             properties:
 *               companyName:
 *                 type: string
 *                 description: Company name
 *                 example: "Tech Corp"
 *               jobTitle:
 *                 type: string
 *                 description: Job title
 *                 example: "Software Engineer"
 *               description:
 *                 type: string
 *                 description: Job description
 *                 example: "We are looking for a skilled software engineer..."
 *               salary:
 *                 type: string
 *                 description: Salary range
 *                 example: "$80,000 - $120,000"
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Job created successfully."
 *                 job:
 *                   type: object
 *                   properties:
 *                     companyName:
 *                       type: string
 *                     jobTitle:
 *                       type: string
 *                     description:
 *                       type: string
 *                     salary:
 *                       type: string
 *       400:
 *         description: Validation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "All fields are required."
 */
router.post('/create/job', async (req, res) => {
  try {
    const { companyName, jobTitle, description, salary } = req.body;

    // Validate required fields
    if (!companyName || !jobTitle || !description || !salary) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Create new job
    const job = new Job({
      companyName: companyName.trim(),
      jobTitle: jobTitle.trim(),
      description: description.trim(),
      salary: salary.trim()
    });

    await job.save();

    res.status(201).json({
      message: 'Job created successfully.',
      job: {
        _id: job._id,
        companyName: job.companyName,
        jobTitle: job.jobTitle,
        description: job.description,
        salary: job.salary,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt
      }
    });
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: List of all jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jobs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       companyName:
 *                         type: string
 *                       jobTitle:
 *                         type: string
 *                       description:
 *                         type: string
 *                       salary:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 */
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.status(200).json({ jobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;

