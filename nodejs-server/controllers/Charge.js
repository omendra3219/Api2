'use strict';

var utils = require('../utils/writer.js');
var Charge = require('../service/ChargeService');

module.exports.create a Charge = function create a Charge (req, res, next, body, aPIVersion) {
  Charge.create a Charge(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Charges = function list Charges (req, res, next, aPIVersion) {
  Charge.list Charges(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrive a Charge = function retrive a Charge (req, res, next, transaction_id, aPIVersion) {
  Charge.retrive a Charge(transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
