'use strict';

var utils = require('../utils/writer.js');
var WebhookEvents = require('../service/WebhookEventsService');

module.exports.list Webhook Events = function list Webhook Events (req, res, next, aPIVersion, seamlessPayAccount) {
  WebhookEvents.list Webhook Events(aPIVersion, seamlessPayAccount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
