'use strict';

var utils = require('../utils/writer.js');
var Charges = require('../service/ChargesService');

module.exports.v1ChargesGET = function v1ChargesGET (req, res, next, aPIVersion) {
  Charges.v1ChargesGET(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ChargesPOST = function v1ChargesPOST (req, res, next, body, aPIVersion) {
  Charges.v1ChargesPOST(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ChargesTransaction_idGET = function v1ChargesTransaction_idGET (req, res, next, transaction_id, aPIVersion) {
  Charges.v1ChargesTransaction_idGET(transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
