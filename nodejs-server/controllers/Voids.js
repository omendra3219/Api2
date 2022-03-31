'use strict';

var utils = require('../utils/writer.js');
var Voids = require('../service/VoidsService');

module.exports.create a void = function create a void (req, res, next, body, aPIVersion) {
  Voids.create a void(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Voids = function list Voids (req, res, next, aPIVersion) {
  Voids.list Voids(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrive a Void = function retrive a Void (req, res, next, transaction_id, aPIVersion) {
  Voids.retrive a Void(transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
