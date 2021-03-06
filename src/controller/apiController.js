"use strict";

const express = require('express');
const router = express.Router();
const config = require("../../config");
const auth = require("../middleware/auth");

router.get('/', async (req, res, next) => {
    const isAuth = !req["accessToken"];
    const authProfile = await auth.getCurrentProfile(req["accessToken"]);
    res.render('api', {
        projectName: config.project.name,
        isAuth: isAuth,
        authProfile: authProfile,
        title: config.project.name + ' | API',
    });
});

module.exports = router;