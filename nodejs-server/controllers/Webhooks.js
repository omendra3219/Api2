'use strict';

var utils = require('../utils/writer.js');
var Webhooks = require('../service/WebhooksService');

module.exports.create Webhook = function create Webhook (req, res, next, body, aPIVersion, seamlessPayAccount) {
  Webhooks.create Webhook(body, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gET_webhooksWebhook_id = function gET_webhooksWebhook_id (req, res, next, newHeader, webhook_id, seamlessPayAccount) {
  Webhooks.gET_webhooksWebhook_id(newHeader, webhook_id, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update Webhook = function update Webhook (req, res, next, body, webhook_endpoint_id, aPIVersion, seamlessPayAccount) {
  Webhooks.update Webhook(body, webhook_endpoint_id, aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
