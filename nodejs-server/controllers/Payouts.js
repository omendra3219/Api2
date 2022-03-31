'use strict';

var utils = require('../utils/writer.js');
var Payouts = require('../service/PayoutsService');

module.exports.list Payouts = function list Payouts (req, res, next, aPIVersion, seamlessPayAccount) {
  Payouts.list Payouts(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
