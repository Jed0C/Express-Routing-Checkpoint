const express = require("express");

const servicesRouter =express.Router();

servicesRouter.get('/',(req,res)=>res.render('services'))


module.exports = servicesRouter