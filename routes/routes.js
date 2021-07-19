const express = require('express');
const router = require('express').Router();


router.get('/', function(req, res, next) {
  res.render('dashboard', {title:Express});
});

router.get('/design', function(req, res, next) {
    res.render('design');
});

router.get('/life', function(req, res, next) {
    res.render('life');
});

router.get('/navi', function(req, res, next) {
    res.render('navi', {title:Express});
});

router.get('/reasons', function(req, res, next) {
    res.render('reasons', {title:Express});
});

router.get('/sound', function(req, res, next) {
    res.render('sound', {title:Express});
});

module.exports = router;

// https://stackoverflow.com/questions/41527320/how-do-i-render-a-handlebars-page-from-a-routing-module