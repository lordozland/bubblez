const express = require('express');

const router = require('express').Router();


router.get('/', function(req, res, next) {
  res.render('/main/main');
});

router.get('/design', function(req, res, next) {
    res.render('design');
});

router.get('/life', function(req, res, next) {
    res.render('life');
});

router.get('/navi', function(req, res, next) {
    res.render('navi');
});

router.get('/reasons', function(req, res, next) {
    res.render('reasons', {title:Express});
});

router.get('/sound', function(req, res, next) {
    res.render('sound', {title:Express});
});

router.get('/418', function(req, res, next) {
    res.render('418', {title:Express});
});

module.exports = router;

// https://stackoverflow.com/questions/41527320/how-do-i-render-a-handlebars-page-from-a-routing-module