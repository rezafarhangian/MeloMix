const express = require('express');
const router = express.Router();
const usersRouter = require("./auth-router")


router.use("/users", usersRouter);


module.exports = router;