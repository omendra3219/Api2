'use strict';

var utils = require('../utils/writer.js');
var BINLookup = require('../service/BINLookupService');

module.exports.bIN Lookup = function bIN Lookup (req, res, next, bIN, aPIVersion) {
  BINLookup.bIN Lookup(bIN, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
