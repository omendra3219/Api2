'use strict';

var utils = require('../utils/writer.js');
var CheckoutSessions = require('../service/CheckoutSessionsService');

module.exports.create a Checkout Session = function create a Checkout Session (req, res, next, body, aPIVersion, seamlessPayAccount) {
  CheckoutSessions.create a Checkout Session(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
