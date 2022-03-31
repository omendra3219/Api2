'use strict';

var utils = require('../utils/writer.js');
var ApplePay = require('../service/ApplePayService');

module.exports.list Domains = function list Domains (req, res, next, aPIVersion, seamlessPayAccount) {
  ApplePay.list Domains(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.register Domain = function register Domain (req, res, next, body, aPIVersion, seamlessPayAccount) {
  ApplePay.register Domain(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unregister Domain = function unregister Domain (req, res, next, domain_name, seamlessPayAccount) {
  ApplePay.unregister Domain(domain_name, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
