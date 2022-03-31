'use strict';


/**
 * List Domains
 *
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns charges
 **/
exports.list Domains = function(aPIVersion,seamlessPayAccount) {
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
 * Register Domain
 *
 * body Object 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.register Domain = function(body,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "txnID" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "domainName" : "test-domain.com",
  "domains" : [ "test-domain.com", "test2.domain.io" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unregister Domain
 *
 * domain_name String 
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.unregister Domain = function(domain_name,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "domains" : [ "test2.domain.io" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

