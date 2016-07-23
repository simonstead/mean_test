/* jshint node: true */
"use strict";

var assert = require('chai').assert;
var Browser = require('phantomjs-prebuilt');
var should = require('should');
var app = require('../main');
var supertest = require('supertest');
var sinon = require('sinon');
var request = require('request');

describe('Routers Test', function() {

  describe('Test main Routes', function() {

    it(' / should return 200', function(done) {
      supertest(app)
        .get('/')
        .expect(200, done);
    });

    it(
      'GET /[Something that doesn\'t exist] should return 404 (Development)',
      function(
        done) {
        supertest(app)
          .get('/asdasdasd', function(req, res) {})
          .expect(404, done);
      });

  });

  describe('Test Group: Angular app Routes', function() {
    it('GET /angular should return 200', function(done) {
      supertest(app)
        .get('/angular')
        .expect(200, done);
    });
  });

  describe('Test Group: threejs Routes', function() {
    it('GET /threejs should return 200', function(done) {
      supertest(app)
        .get('/threejs')
        .expect(200, done);
    });
  });

  describe('Test Group: /Users Routes', function() {
    it('GET /threejs should return 200', function(done) {
      supertest(app)
        .get('/users')
        .expect(200, done);
    });

  });

  describe('Test Group: Error Handling Capabilities', sinon.test(function(
    done) {

    before(function(done) {
      done();
    });

    after(function(done) {
      done();
    });

    it('Test: devErrorHandler', function(done) {
      var err = {
          status: null,
          message: "test"
        },
        res = {};
      res.status = function(param) {};
      res.render = function(viewname, cb) {};

      app.devErrorHandler(err, null, res, null);
      done();
    });

    it('Test: prodErrorHandler', function(done) {
      var err = {
          status: null,
          message: "test"
        },
        res = {};
      res.status = function(param) {};
      res.render = function(viewname, cb) {};

      app.prodErrorHandler(err, null, res, null);
      done();
    });


  }));


});
