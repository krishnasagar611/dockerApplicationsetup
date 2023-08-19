module.exports = app => {
    const users = require("../controllers/user.controller.js")
  
    let router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/users", users.findAll);
  
    // Create a new Tutorial
    router.post("/create-user", users.create);
  
    app.use('/user-api', router);
  };