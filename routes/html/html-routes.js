const path = require("path");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });
// "/dashboard" loads the specific user dashboard
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-dashboard.html"));
  });

  // "/account" loads the users info to be updated or reviewed
  app.get("/account", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/account-info.html"));
  });

  // "/stream" loads the individual user's streams(messages) dashboard
  app.get("/streams", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/streams.html"));
  });

  // "/rafts" loads the individual user's rafts(documents) dashboard
  app.get("/rafts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/rafts.html"));
  });

};
