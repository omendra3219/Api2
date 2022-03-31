'use strict';

var utils = require('../utils/writer.js');
var IRSReporting = require('../service/IRSReportingService');

module.exports.list IRS Reporting = function list IRS Reporting (req, res, next, aPIVersion, seamlessPayAccount) {
  IRSReporting.list IRS Reporting(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
