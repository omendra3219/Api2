'use strict';

var utils = require('../utils/writer.js');
var SubMerchant = require('../service/SubMerchantService');

module.exports.create SubMerchant = function create SubMerchant (req, res, next, body, aPIVersion) {
  SubMerchant.create SubMerchant(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list SubMerchants = function list SubMerchants (req, res, next, aPIVersion) {
  SubMerchant.list SubMerchants(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve SubMerchant = function retrieve SubMerchant (req, res, next, submerchant_id, aPIVersion) {
  SubMerchant.retrieve SubMerchant(submerchant_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
