'use strict';

var utils = require('../utils/writer.js');
var Statements = require('../service/StatementsService');

module.exports. List Statements = function  List Statements (req, res, next, aPIVersion) {
  Statements. List Statements(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
