'use strict';


/**
 * List Captures
 *
 * aPIVersion String  (optional)
 * returns Charges
 **/
exports.list Captures = function(aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "amount",
  "cvv" : "cvv",
  "metadata" : "metadata",
  "txnEnv" : "M",
  "taxExempt" : true,
  "idempotencyKey" : "idempotencyKey",
  "capture" : true,
  "description" : "description",
  "descriptor" : "descriptor",
  "surchargeFeeAmount" : "surchargeFeeAmount",
  "token" : "token",
  "currency" : "USD",
  "tip" : "tip",
  "taxAmount" : "taxAmount",
  "poNumber" : "poNumber",
  "order" : {
    "shipToZip" : "shipToZip",
    "shipFromZip" : "shipFromZip",
    "items" : [ {
      "Array" : [ {
        "taxRate" : "taxRate",
        "quantity" : "quantity",
        "taxExempt" : true,
        "unitOfMeasure" : "unitOfMeasure",
        "lineTotal" : "lineTotal",
        "unitCost" : "unitCost",
        "discountAmount" : "discountAmount",
        "upc" : "upc",
        "lineNumber" : "lineNumber",
        "taxAmount" : "taxAmount"
      }, {
        "taxRate" : "taxRate",
        "quantity" : "quantity",
        "taxExempt" : true,
        "unitOfMeasure" : "unitOfMeasure",
        "lineTotal" : "lineTotal",
        "unitCost" : "unitCost",
        "discountAmount" : "discountAmount",
        "upc" : "upc",
        "lineNumber" : "lineNumber",
        "taxAmount" : "taxAmount"
      } ]
    }, {
      "Array" : [ {
        "taxRate" : "taxRate",
        "quantity" : "quantity",
        "taxExempt" : true,
        "unitOfMeasure" : "unitOfMeasure",
        "lineTotal" : "lineTotal",
        "unitCost" : "unitCost",
        "discountAmount" : "discountAmount",
        "upc" : "upc",
        "lineNumber" : "lineNumber",
        "taxAmount" : "taxAmount"
      }, {
        "taxRate" : "taxRate",
        "quantity" : "quantity",
        "taxExempt" : true,
        "unitOfMeasure" : "unitOfMeasure",
        "lineTotal" : "lineTotal",
        "unitCost" : "unitCost",
        "discountAmount" : "discountAmount",
        "upc" : "upc",
        "lineNumber" : "lineNumber",
        "taxAmount" : "taxAmount"
      } ]
    } ]
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
 * Create a Capture
 *
 * body V1_capture_body 
 * aPIVersion String  (optional)
 * returns Captures
 **/
exports.pOST_v1Capture = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "amount",
  "idempotencyKey" : "idempotencyKey",
  "tip" : "tip",
  "taxAmount" : "taxAmount",
  "surchargeFeeAmount" : "surchargeFeeAmount",
  "txnID" : "txnID",
  "order" : {
    "shipToZip" : "shipToZip",
    "shipFromZip" : "shipFromZip",
    "items" : [ {
      "Array" : [ {
        "taxRate" : "taxRate",
        "quantity" : "quantity",
        "taxExempt" : true,
        "unitOfMeasure" : "unitOfMeasure",
        "lineTotal" : "lineTotal",
        "unitCost" : "unitCost",
        "discountAmount" : "discountAmount",
        "upc" : "upc",
        "lineNumber" : "lineNumber",
        "taxAmount" : "taxAmount"
      }, {
        "taxRate" : "taxRate",
        "quantity" : "quantity",
        "taxExempt" : true,
        "unitOfMeasure" : "unitOfMeasure",
        "lineTotal" : "lineTotal",
        "unitCost" : "unitCost",
        "discountAmount" : "discountAmount",
        "upc" : "upc",
        "lineNumber" : "lineNumber",
        "taxAmount" : "taxAmount"
      } ]
    }, {
      "Array" : [ {
        "taxRate" : "taxRate",
        "quantity" : "quantity",
        "taxExempt" : true,
        "unitOfMeasure" : "unitOfMeasure",
        "lineTotal" : "lineTotal",
        "unitCost" : "unitCost",
        "discountAmount" : "discountAmount",
        "upc" : "upc",
        "lineNumber" : "lineNumber",
        "taxAmount" : "taxAmount"
      }, {
        "taxRate" : "taxRate",
        "quantity" : "quantity",
        "taxExempt" : true,
        "unitOfMeasure" : "unitOfMeasure",
        "lineTotal" : "lineTotal",
        "unitCost" : "unitCost",
        "discountAmount" : "discountAmount",
        "upc" : "upc",
        "lineNumber" : "lineNumber",
        "taxAmount" : "taxAmount"
      } ]
    } ]
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
 * Retrieve a Capture
 *
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve a Capture = function(transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
  "amount" : "1.00",
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
  "authCode" : "A11111",
  "avsMessage" : "street match",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "order" : {
    "shipToZip" : "11111-1111",
    "shipFromZip" : "99999-9999",
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
  "status" : "CAPTURED",
  "statusCode" : "captured",
  "statusDescription" : "Transaction capture success",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "1.00",
  "txnDate" : "2022-01-06T09:22:31Z",
  "taxAmount" : "1.00",
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

