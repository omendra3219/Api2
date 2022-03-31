'use strict';

var utils = require('../utils/writer.js');
var Batches = require('../service/BatchesService');

module.exports.close a Batch = function close a Batch (req, res, next, body, aPIVersion, seamlessPayAccount) {
  Batches.close a Batch(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Batch = function create a Batch (req, res, next, aPIVersion, seamlessPayAccount) {
  Batches.create a Batch(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Batches = function list Batches (req, res, next, aPIVersion, seamlessPayAccount) {
  Batches.list Batches(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Batch&#x27;s Transactions = function retrieve Batch&#x27;s Transactions (req, res, next, newHeader, batch_id, seamlessPayAccount) {
  Batches.retrieve Batch&#x27;s Transactions(newHeader, batch_id, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
