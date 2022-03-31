'use strict';

var utils = require('../utils/writer.js');
var PANVault = require('../service/PANVaultService');

module.exports.create Token = function create Token (req, res, next, body, aPIVersion) {
  PANVault.create Token(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
