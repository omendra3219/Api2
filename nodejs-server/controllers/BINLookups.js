'use strict';

var utils = require('../utils/writer.js');
var BINLookups = require('../service/BINLookupsService');

module.exports.bIN Lookups = function bIN Lookups (req, res, next, bIN, aPIVersion, seamlessPayAccount) {
  BINLookups.bIN Lookups(bIN, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
