'use strict';

var utils = require('../utils/writer.js');
var Refunds = require('../service/RefundsService');

module.exports. List Refunds = function  List Refunds (req, res, next, aPIVersion) {
  Refunds. List Refunds(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Retrieve a Refund = function  Retrieve a Refund (req, res, next, transaction_id, transaction_id, aPIVersion) {
  Refunds. Retrieve a Refund(transaction_id, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Update a Refund = function  Update a Refund (req, res, next, body, transaction_id, transaction_id, aPIVersion) {
  Refunds. Update a Refund(body, transaction_id, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Refund = function create a Refund (req, res, next, body, aPIVersion) {
  Refunds.create a Refund(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
