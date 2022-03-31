'use strict';

var utils = require('../utils/writer.js');
var GiftCards = require('../service/GiftCardsService');

module.exports. Delete Gift Card = function  Delete Gift Card (req, res, next, accountNumber|token, aPIVersion) {
  GiftCards. Delete Gift Card(accountNumber|token, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create Gift Card = function create Gift Card (req, res, next, body, aPIVersion) {
  GiftCards.create Gift Card(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Gift Card = function retrieve Gift Card (req, res, next, accountNumber|token, aPIVersion) {
  GiftCards.retrieve Gift Card(accountNumber|token, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update Gift Card = function update Gift Card (req, res, next, body, accountNumber|token, aPIVersion) {
  GiftCards.update Gift Card(body, accountNumber|token, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
