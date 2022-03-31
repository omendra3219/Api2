'use strict';

var utils = require('../utils/writer.js');
var Refunds = require('../service/RefundsService');

module.exports. Retrieve a Refund = function  Retrieve a Refund (req, res, next, transaction_id, aPIVersion, seamlessPayAccount) {
  Refunds. Retrieve a Refund(transaction_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Refund = function create a Refund (req, res, next, body, aPIVersion, seamlessPayAccount) {
  Refunds.create a Refund(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Refunds = function list Refunds (req, res, next, aPIVersion, seamlessPayAccount) {
  Refunds.list Refunds(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update a Refund = function update a Refund (req, res, next, body, transaction_id, aPIVersion, seamlessPayAccount) {
  Refunds.update a Refund(body, transaction_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
