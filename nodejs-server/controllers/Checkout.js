'use strict';

var utils = require('../utils/writer.js');
var Checkout = require('../service/CheckoutService');

module.exports.create a Checkout Session = function create a Checkout Session (req, res, next, body, aPIVersion) {
  Checkout.create a Checkout Session(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
