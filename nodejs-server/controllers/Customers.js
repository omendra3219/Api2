'use strict';

var utils = require('../utils/writer.js');
var Customers = require('../service/CustomersService');

module.exports.create a Customer = function create a Customer (req, res, next, body, aPIVersion, seamlessPayAccount) {
  Customers.create a Customer(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Customers = function list Customers (req, res, next, aPIVersion, seamlessPayAccount) {
  Customers.list Customers(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve a Customer = function retrieve a Customer (req, res, next, customer_id, aPIVersion, seamlessPayAccount) {
  Customers.retrieve a Customer(customer_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update a Customer = function update a Customer (req, res, next, body, customer_id, aPIVersion, seamlessPayAccount) {
  Customers.update a Customer(body, customer_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
