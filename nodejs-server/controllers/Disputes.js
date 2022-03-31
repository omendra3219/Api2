'use strict';

var utils = require('../utils/writer.js');
var Disputes = require('../service/DisputesService');

module.exports.list Disputes = function list Disputes (req, res, next, aPIVersion) {
  Disputes.list Disputes(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
