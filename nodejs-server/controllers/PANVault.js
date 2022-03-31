'use strict';

var utils = require('../utils/writer.js');
var PANVault = require('../service/PANVaultService');

module.exports.create Token = function create Token (req, res, next, body, aPIVersion, seamlessPayAccount) {
  PANVault.create Token(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
