

// const express = require("express");
// const bodyParser = require("body-parser");
// const studentRoutes = require("./routes/StudentRoutes");
// const { sequelize } = require("./models");

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use("/api", studentRoutes); // Prefix API routes

// // Start the server
// const PORT = process.env.PORT || 3000;
// sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/StudentRoutes"); 
const courseRoutes = require("./routes/courseroutes");


const app = express();
app.use(bodyParser.json()); // Middleware for JSON requests
app.use("/api/students", studentRoutes); 
app.use("/api", courseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
