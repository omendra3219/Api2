'use strict';

var utils = require('../utils/writer.js');
var PCIAudit = require('../service/PCIAuditService');

module.exports.list PCI Audit = function list PCI Audit (req, res, next, aPIVersion, seamlessPayAccount) {
  PCIAudit.list PCI Audit(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
