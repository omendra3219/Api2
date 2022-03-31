'use strict';

var utils = require('../utils/writer.js');
var Retrievals = require('../service/RetrievalsService');

module.exports.list Retrievals = function list Retrievals (req, res, next, aPIVersion) {
  Retrievals.list Retrievals(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
