'use strict';

var utils = require('../utils/writer.js');
var Retrievals = require('../service/RetrievalsService');

module.exports.list Retrievals = function list Retrievals (req, res, next, aPIVersion, seamlessPayAccount) {
  Retrievals.list Retrievals(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
