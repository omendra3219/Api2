'use strict';

var utils = require('../utils/writer.js');
var Credits = require('../service/CreditsService');

module.exports.create a Credit = function create a Credit (req, res, next, body, accountNumber|token, aPIVersion, seamlessPayAccount) {
  Credits.create a Credit(body, accountNumber|token, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
