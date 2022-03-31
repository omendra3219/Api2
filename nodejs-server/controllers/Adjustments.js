'use strict';

var utils = require('../utils/writer.js');
var Adjustments = require('../service/AdjustmentsService');

module.exports. Create an Adjustment = function  Create an Adjustment (req, res, next, body, aPIVersion) {
  Adjustments. Create an Adjustment(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
