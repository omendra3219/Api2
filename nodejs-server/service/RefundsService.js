'use strict';


/**
 * Retrieve a Refund
 *
 * transaction_id String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Refunds
 **/
exports. Retrieve a Refund = function(transaction_id,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "amount",
  "metadata" : "metadata",
  "idempotencyKey" : "idempotencyKey",
  "currency" : "USD",
  "descriptor" : "descriptor",
  "transactionID" : "transactionID"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Refund
 *
 * body Object 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Refunds
 **/
exports.create a Refund = function(body,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "amount",
  "metadata" : "metadata",
  "idempotencyKey" : "idempotencyKey",
  "currency" : "USD",
  "descriptor" : "descriptor",
  "transactionID" : "transactionID"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Refunds
 *
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.list Refunds = function(aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
    "authCode" : "A11111",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "metadata" : {
      "customOption" : "example"
    },
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "REFUNDED",
    "statusCode" : "refunded",
    "statusDescription" : "Transaction refund success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
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


/**
 * Update a Refund
 *
 * body Object 
 * transaction_id String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.update a Refund = function(body,transaction_id,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
  "authCode" : "A11111",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "metadata" : {
    "customOption" : "example"
  },
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "REFUNDED",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "txnDate" : "2022-01-06T09:22:31Z",
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

