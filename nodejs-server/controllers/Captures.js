'use strict';

var utils = require('../utils/writer.js');
var Captures = require('../service/CapturesService');

module.exports.list Captures = function list Captures (req, res, next, aPIVersion) {
  Captures.list Captures(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pOST_v1Capture = function pOST_v1Capture (req, res, next, body, aPIVersion) {
  Captures.pOST_v1Capture(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve a Capture = function retrieve a Capture (req, res, next, transaction_id, aPIVersion) {
  Captures.retrieve a Capture(transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
