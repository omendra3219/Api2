'use strict';


/**
 * List Refunds
 *
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.v1RefundsGET = function(aPIVersion) {
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
    "ipAddress" : "99.99.99.99",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "REFUNDED",
    "statusCode" : "refunded",
    "statusDescription" : "Transaction refund success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "txnDate" : "2022-01-06T04:59:20Z",
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
 * Create a Refund
 *
 * body Refund-Request 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.v1RefundsPOST = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "emvData" : "8A023030910A7344A67B24F6578F30309F6E04000000019F7C20DEADBEEFDEADBEEF010203040506070809101112131415161718192021222324",
  "ipAddress" : "99.99.99.99",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "REFUNDED",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "txnDate" : "2022-03-10T05:33:53Z",
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z",
  "customer" : {
    "id" : "CUS_01CBVZHCFCYQD84QS5V2323HB6",
    "address" : "400 Madison Ave",
    "address2" : "10th Fl",
    "companyName" : "ABC Business",
    "city" : "New York",
    "country" : "USA",
    "email" : "hello@seamlesspay.com",
    "metadata" : "{\"customOption\":\"example\"}",
    "name" : "Michael Smith",
    "phone" : "2125555000",
    "state" : "NY",
    "zip" : "10010",
    "website" : "https://example.com",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
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
 * Retrieve a Refund
 *
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.v1RefundsTransaction_idGET = function(transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "ipAddress" : "99.99.99.99",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "REFUNDED",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "txnDate" : "2022-01-06T04:59:20Z",
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
 * Update a Refund
 *
 * body Refunds_transaction_id_body 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.v1RefundsTransaction_idPUT = function(body,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "ipAddress" : "99.99.99.99",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "REFUNDED",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "txnDate" : "2022-01-06T04:59:20Z",
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

