'use strict';

var utils = require('../utils/writer.js');
var Statements = require('../service/StatementsService');

module.exports.list Statements = function list Statements (req, res, next, aPIVersion, seamlessPayAccount) {
  Statements.list Statements(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
