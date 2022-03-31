'use strict';

var utils = require('../utils/writer.js');
var Charges = require('../service/ChargesService');

module.exports.chargesPOST = function chargesPOST (req, res, next, body, aPIVersion, seamlessPayAccount) {
  Charges.chargesPOST(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Charges = function list Charges (req, res, next, aPIVersion, seamlessPayAccount) {
  Charges.list Charges(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve a Charge = function retrieve a Charge (req, res, next, transaction_id, aPIVersion, seamlessPayAccount) {
  Charges.retrieve a Charge(transaction_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update a Charge = function update a Charge (req, res, next, body, transaction_id, aPIVersion, seamlessPayAccount) {
  Charges.update a Charge(body, transaction_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.void a Charge = function void a Charge (req, res, next, transaction_id, aPIVersion, seamlessPayAccount) {
  Charges.void a Charge(transaction_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
