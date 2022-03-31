'use strict';

var utils = require('../utils/writer.js');
var Refunds = require('../service/RefundsService');

module.exports.v1RefundsGET = function v1RefundsGET (req, res, next, aPIVersion) {
  Refunds.v1RefundsGET(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RefundsPOST = function v1RefundsPOST (req, res, next, body, aPIVersion) {
  Refunds.v1RefundsPOST(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RefundsTransaction_idGET = function v1RefundsTransaction_idGET (req, res, next, transaction_id, aPIVersion) {
  Refunds.v1RefundsTransaction_idGET(transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RefundsTransaction_idPUT = function v1RefundsTransaction_idPUT (req, res, next, body, transaction_id, aPIVersion) {
  Refunds.v1RefundsTransaction_idPUT(body, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
