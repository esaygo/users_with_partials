//specifies which routes will be handled by which controllers

var mongoose = require('mongoose');

var messages = require('../controllers/messages.js');

module.exports = function(app) {

  app.get('/', function (req,res) {
    res.render('index');
  });

}
