'use strict';


/**
 * Close a Batch
 * Close Batch manually
 *
 * body V1_closebatch_body 
 * aPIVersion String  (optional)
 * returns Batches
 **/
exports.close a Batch = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "batchID" : "batchID"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Batch
 *
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create a Batch = function(aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "batchID" : "BCH_01BPH7PHBE8EHYAJRGGMN94DD5"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Batches
 * Statistical data of batches
 *
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Batches = function(aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "BCH_01BPH7PHBE8EHYAJRGGMN94DD5",
    "autoBatchTime" : "10:00",
    "batchNumber" : "70195401736",
    "batchStatus" : "BATCH_OPEN",
    "merchantId" : "11111111",
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


/**
 * Retrieve Batch's Transactions
 *
 * batch_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve Batch's Transactions = function(batch_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
    "authCode" : "A11111",
    "avsMessage" : "street match, zip decline",
    "avsResult" : "SM, ZD",
    "cvvResult" : "M",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "charge",
    "status" : "AUTHORIZED",
    "statusCode" : "approved",
    "statusDescription" : "Transaction approved",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "string",
    "txnDate" : "2022-01-06T09:22:31Z",
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

