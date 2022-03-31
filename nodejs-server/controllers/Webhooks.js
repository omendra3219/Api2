'use strict';

var utils = require('../utils/writer.js');
var Webhooks = require('../service/WebhooksService');

module.exports.create Webhook = function create Webhook (req, res, next, body, aPIVersion) {
  Webhooks.create Webhook(body, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Webhook = function retrieve Webhook (req, res, next, webhook_id, aPIVersion) {
  Webhooks.retrieve Webhook(webhook_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update Webhook = function update Webhook (req, res, next, body, webhook_endpoint_id, aPIVersion) {
  Webhooks.update Webhook(body, webhook_endpoint_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
