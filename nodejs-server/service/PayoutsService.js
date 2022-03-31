'use strict';


/**
 * List Payouts
 * Statistical data of payouts
 *
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.list Payouts = function(aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "DPT_01BBC61W87JS2JTF2A6SZWM77K",
    "amount" : "105.00",
    "payoutBankAccount" : "****152296",
    "merchantID" : "3463465436543653",
    "fundingDate" : "03/08/2017",
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

