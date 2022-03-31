'use strict';

var utils = require('../utils/writer.js');
var Batches = require('../service/BatchesService');

module.exports.close a Batch = function close a Batch (req, res, next, body, aPIVersion) {
  Batches.close a Batch(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Batch = function create a Batch (req, res, next, aPIVersion) {
  Batches.create a Batch(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Batches = function list Batches (req, res, next, aPIVersion) {
  Batches.list Batches(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Batch&#x27;s Transactions = function retrieve Batch&#x27;s Transactions (req, res, next, batch_id, aPIVersion) {
  Batches.retrieve Batch&#x27;s Transactions(batch_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
