const Job = require("../models/jobsModel");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });

    if (!jobs)
      res.status(404).json({
        status: "fail",
        message: "Job not found!",
      });
    res.status(200).json({
      status: "success",
      length: jobs.length,
      jobs,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    if (!newJob)
      res.status(403).json({
        status: "fail",
        message: "Required all fields!",
      });

    res.status(201).json({
      status: "success",
      Job: newJob,
    });
  } catch (error) {
    // console.log(error);
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.updateJob = async (req, res) => {
  try {
    const newJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!newJob)
      res.status(403).json({
        status: "fail",
        message: "Required all fields!",
      });

    res.status(201).json({
      status: "success",
      job: newJob,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job)
      res.status(403).json({
        status: "fail",
        message: "Record not found with that IDs!",
      });
    res.status(204).json({
      status: "sucess",
      message: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getOneJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job)
      res.status(403).json({
        status: "fail",
        message: "Record not found with that IDs!",
      });
    res.status(200).json({
      status: "success",
      job,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Sample data for a job
// const sampleJobData = {
//   title: "Software Engineer",
//   type: "Full-time",
//   description:
//     "Join our dynamic team to develop innovative software solutions.",
//   location: "San Francisco, CA",
//   salary: "$100,000 - $120,000 per year",
//   company: {
//     name: "Tech Innovations Inc.",
//     description: "A leading tech company specializing in software development.",
//     contactEmail: "info@techinnovations.com",
//     contactPhone: "+1 (123) 456-7890",
//   },
// };

// // Create a new job using the Job model
// exports.createJob = async () => {
//   try {
//     const newJob = await Job.create(sampleJobData);
//     console.log("Sample job created successfully:", newJob);
//   } catch (error) {
//     console.error("Error creating sample job:", error);
//   }
// };

// Call the function to create the sample job
