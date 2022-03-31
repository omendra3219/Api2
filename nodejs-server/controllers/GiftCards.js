'use strict';

var utils = require('../utils/writer.js');
var GiftCards = require('../service/GiftCardsService');

module.exports.create Gift Card = function create Gift Card (req, res, next, body, aPIVersion, seamlessPayAccount) {
  GiftCards.create Gift Card(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete Gift Card = function delete Gift Card (req, res, next, accountNumber|token, aPIVersion, seamlessPayAccount) {
  GiftCards.delete Gift Card(accountNumber|token, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Gift Card = function retrieve Gift Card (req, res, next, accountNumber|token, aPIVersion, seamlessPayAccount) {
  GiftCards.retrieve Gift Card(accountNumber|token, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
