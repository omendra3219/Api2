'use strict';

var utils = require('../utils/writer.js');
var Disputes = require('../service/DisputesService');

module.exports.list Disputes = function list Disputes (req, res, next, aPIVersion, seamlessPayAccount) {
  Disputes.list Disputes(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
