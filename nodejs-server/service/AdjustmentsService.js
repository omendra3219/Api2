'use strict';


/**
 * Create an Adjustment
 * Adjustment only apply to CREDIT_CARD transactions
 *
 * body V1_adjustment_body 
 * aPIVersion String  (optional)
 * returns Adjustments_1
 **/
exports. Create an Adjustment = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "amount",
  "tip" : "tip",
  "taxAmount" : "taxAmount",
  "surchargeFeeAmount" : "surchargeFeeAmount",
  "txnID" : "txnID"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

