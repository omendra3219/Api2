'use strict';


/**
 * List Retrievals
 * Retrieves all webhooks
 *
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Retrievals = function(aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "RTL_01BBC61W87JS2JTF2A6SZWM33Y",
    "amount" : "105.00",
    "caseNumber" : "34643",
    "lastFour" : "6773",
    "merchantID" : "2142314234231412",
    "retrievalCode" : "6021",
    "retrievalDate" : "01/16/2017",
    "txnDate" : "2020-02-24T19:43:12.730Z",
    "txnID" : "004-463436346543643643",
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

