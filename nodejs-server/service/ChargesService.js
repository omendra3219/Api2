'use strict';


/**
 * Create a Charge
 *
 * body Object 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.chargesPOST = function(body,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Charges
 *
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.list Charges = function(aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "adjustments" : [ {
      "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
      "amount" : "105.00",
      "tip" : "1.00",
      "taxAmount" : "5.00",
      "surchargeFeeAmount" : "1.00"
    } ],
    "currency" : "USD",
    "fullyRefunded" : "true",
    "paymentType" : "credit_card",
    "paymentNetwork" : "Visa",
    "accountType" : "Credit",
    "expDate" : "0125",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "charge",
    "order" : {
      "shipFromPostalCode" : "99999-9999",
      "shippingAddress" : {
        "line1" : "400 Madison Ave",
        "line2" : "10th Fl",
        "city" : "New York",
        "country" : "US",
        "state" : "NY",
        "postalCode" : "11111-1111"
      },
      "items" : [ {
        "discountAmount" : "9.00",
        "unitCost" : "2.00",
        "unitOfMeasure" : "CS",
        "lineNumber" : "1",
        "description" : "DESCRIPTION-1",
        "taxAmount" : "109.00",
        "quantity" : "1000",
        "upc" : "UPC-1",
        "lineTotal" : "2000.00",
        "taxExempt" : true,
        "taxRate" : "0.025"
      } ]
    },
    "refunds" : [ {
      "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
      "amount" : "1.00",
      "authCode" : "A11111",
      "currency" : "USD",
      "paymentNetwork" : "Visa",
      "accountType" : "Credit",
      "metadata" : {
        "customOption" : "example"
      },
      "ipAddress" : "192.168.0.1",
      "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
      "lastFour" : "1000",
      "method" : "refund",
      "status" : "captured",
      "statusCode" : "captured",
      "statusDescription" : "Transaction capture success",
      "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
      "transactionDate" : "2022-01-04T14:39:13Z",
      "updatedAt" : "2017-12-15T19:08:18.262Z",
      "createdAt" : "2017-12-15T19:08:18.262Z"
    } ],
    "status" : "authorized",
    "statusCode" : "approved",
    "statusDescription" : "Transaction approved",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "1.00",
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


/**
 * Retrieve a Charge
 *
 * transaction_id String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.retrieve a Charge = function(transaction_id,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "adjustments" : [ {
    "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
    "amount" : "105.00",
    "tip" : "1.00",
    "taxAmount" : "5.00",
    "surchargeFeeAmount" : "1.00"
  } ],
  "currency" : "USD",
  "fullyRefunded" : "true",
  "paymentType" : "credit_card",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "expDate" : "0125",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "order" : {
    "shipFromPostalCode" : "99999-9999",
    "shippingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "US",
      "state" : "NY",
      "postalCode" : "11111-1111"
    },
    "items" : [ {
      "discountAmount" : "9.00",
      "unitCost" : "2.00",
      "unitOfMeasure" : "CS",
      "lineNumber" : "1",
      "description" : "DESCRIPTION-1",
      "taxAmount" : "109.00",
      "quantity" : "1000",
      "upc" : "UPC-1",
      "lineTotal" : "2000.00",
      "taxExempt" : true,
      "taxRate" : "0.025"
    } ]
  },
  "refunds" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "currency" : "USD",
    "paymentNetwork" : "Visa",
    "accountType" : "Credit",
    "metadata" : {
      "customOption" : "example"
    },
    "ipAddress" : "192.168.0.1",
    "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "captured",
    "statusCode" : "captured",
    "statusDescription" : "Transaction capture success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "transactionDate" : "2022-01-04T14:39:13Z",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "status" : "authorized",
  "statusCode" : "approved",
  "statusDescription" : "Transaction approved",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "1.00",
  "transactionDate" : "2022-01-04T14:39:13Z",
  "verification" : {
    "addressLine1" : "pass",
    "addressPostalCode" : "pass",
    "cvv" : "pass"
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
 * Update a Charge
 *
 * body Object 
 * transaction_id String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.update a Charge = function(body,transaction_id,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Void a Charge
 * Voids requires either idempotency key or transactionID
 *
 * transaction_id String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.void a Charge = function(transaction_id,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "status" : "voided",
  "statusCode" : "voided",
  "statusDescription" : "Transaction void success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "transactionDate" : "2022-01-04T14:39:13Z",
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

