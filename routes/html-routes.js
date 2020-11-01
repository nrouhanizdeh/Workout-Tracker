// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const router = require("express").Router();

// module.exports = function (router) {
//   router.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
//   });
// };

// exercise.html route
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// stats.html route
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
