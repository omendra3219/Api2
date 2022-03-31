'use strict';


/**
 * List Disputes
 * Statistical data of disputes
 *
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.list Disputes = function(aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "CHK_01BBC61W87JS2JTF2A6SZWM11Y",
    "amount" : 211.15,
    "caseNumber" : "043 345 34534",
    "cbCode" : "430",
    "cbdetail" : [ ],
    "disputeDate" : "01/30/2017",
    "lastFour" : "7982",
    "merchantID" : "3425423542523523245424",
    "repeatCb" : "1",
    "transactionDate" : "2020-02-24T19:43:12.730Z",
    "transactionID" : "004-463436346543643643",
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

