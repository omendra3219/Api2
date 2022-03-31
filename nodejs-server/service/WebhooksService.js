'use strict';


/**
 * Create Webhook
 * Webhooks
 *
 * body V1_webhooksendpoints_body 
 * aPIVersion String  (optional)
 * returns Webhooks
 **/
exports.create Webhook = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endpointType" : "ACCOUNT",
  "webhookSubscriptions" : {
    "Array" : [ {
      "service" : "service",
      "event" : "event"
    }, {
      "service" : "service",
      "event" : "event"
    } ]
  },
  "secret" : "secret",
  "payloadUrl" : "payloadUrl"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Webhook
 * Retrieves the details of webhook
 *
 * webhook_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve Webhook = function(webhook_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "WBE_01C56BV08MX9ACFFN84GQEKEGH",
  "service" : "tickets",
  "event" : "created",
  "endpointID" : "WBH_01C569BBWRP1KSDDDN098Y3127",
  "status" : "200",
  "sentAttempts" : 1,
  "response" : {
    "success" : true
  },
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Webhook
 * Update the details of webhook
 *
 * body Webhooksendpoints_webhook_endpoint_id_body 
 * webhook_endpoint_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.update Webhook = function(body,webhook_endpoint_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "WBH_01BBC61W87JS2JTF2A6SGTM50X",
  "endpointType" : "ACCOUNT",
  "payloadUrl" : "https://www.example.com/webhook",
  "secret" : "50991311",
  "webhookSubscriptions" : [ {
    "id" : "WBS_01FFC61W87JS2JTF3A8SGTM70T",
    "event" : "created",
    "service" : "customers"
  } ],
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

