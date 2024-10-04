const express = require("express");
const { CronJob } = require('cron');

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const job = new CronJob(
	'*/5 * * * * *',
	function () {
		console.log('You will see this message every 5 second after');
	}, 
	null, 
	true,
);

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});


module.exports = app;