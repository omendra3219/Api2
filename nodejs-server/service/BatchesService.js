'use strict';


/**
 * Close a Batch
 * Close Batch manually
 *
 * body Object 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.close a Batch = function(body,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "transactions" : 1,
    "batches" : [ "BCH_01EHSX8WQP0KYJCCK9B80PX3M1" ]
  },
  "message" : "Produce transactions successfully!",
  "input" : {
    "batchId" : "BCH_01EHSX8WQP0KYJCCK9B80PX3M1",
    "env" : "live",
    "merchantId" : "MRT_01D6K7PCCH4YDAPENGVBRPK861"
  }
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
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.create a Batch = function(aPIVersion,seamlessPayAccount) {
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
 *
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.list Batches = function(aPIVersion,seamlessPayAccount) {
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
 * Statistical data of batches
 *
 * newHeader String 
 * batch_id String 
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.retrieve Batch's Transactions = function(newHeader,batch_id,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "paymentType" : "credit_card",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "charge",
    "status" : "authorized",
    "statusCode" : "approved",
    "statusDescription" : "Transaction approved",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "string",
    "transactionDate" : "2022-01-04T14:39:13Z",
    "verification" : {
      "addressLine1" : "pass",
      "addressPostalCode" : "pass",
      "cvv" : "pass"
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

