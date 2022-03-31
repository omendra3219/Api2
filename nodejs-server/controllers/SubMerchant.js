'use strict';

var utils = require('../utils/writer.js');
var SubMerchant = require('../service/SubMerchantService');

module.exports.sub = function sub (req, res, next, aPIVersion, seamlessPayAccount) {
  SubMerchant.sub(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submerchantsSubmerchant_idGET = function submerchantsSubmerchant_idGET (req, res, next, submerchant_id, aPIVersion, seamlessPayAccount) {
  SubMerchant.submerchantsSubmerchant_idGET(submerchant_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
