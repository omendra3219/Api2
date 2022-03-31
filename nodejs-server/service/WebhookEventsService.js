'use strict';


/**
 * List Webhook Events
 * Retrieves all Webhook Events
 *
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Webhook Events = function(aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
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
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

