'use strict';

var utils = require('../utils/writer.js');
var Payouts = require('../service/PayoutsService');

module.exports. List Payouts = function  List Payouts (req, res, next, aPIVersion) {
  Payouts. List Payouts(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
