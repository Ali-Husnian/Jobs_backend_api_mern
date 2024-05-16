const express = require("express");
const jobController = require("../controllers/jobController");

const router = express.Router();

router.get("/view", jobController.getJobs);
router.post("/create", jobController.createJob);
router.patch("/update/:id", jobController.updateJob);
router.delete("/remove/:id", jobController.deleteJob);
router.get("/view/:id", jobController.getOneJob);

module.exports = router;
