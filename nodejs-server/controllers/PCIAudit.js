'use strict';

var utils = require('../utils/writer.js');
var PCIAudit = require('../service/PCIAuditService');

module.exports.list PCI Audit = function list PCI Audit (req, res, next, aPIVersion) {
  PCIAudit.list PCI Audit(aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
