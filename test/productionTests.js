/* jshint node: true */
"use strict";

var assert = require('chai').assert;
var Browser = require('phantomjs-prebuilt');
var app = require('../main');
var supertest = require('supertest');
// 
//
// describe('Routers Test', function() {
//   describe('Test main Routes', function() {
//
//     var mode = process.env.NODE_ENV;
//
//     before(function(done) {
//       process.env.NODE_ENV = 'production';
//       done();
//     });
//
//     it(
//       ' /[Something that doesn\'t exist] should return 404 (Production)',
//       function(
//         done) {
//         supertest(app)
//           .get('/asdasdasd', function(req, res) {})
//           .expect(404, done);
//       });
//
//     after(function(done) {
//       process.env.NODE_ENV = mode;
//       done();
//     });
//   });
//
// });
