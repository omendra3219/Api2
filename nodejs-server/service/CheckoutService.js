'use strict';


/**
 * Create a Checkout Session
 *
 * body  
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create a Checkout Session = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CHS_01DJNFZAA730Z5RM3YSKM2908V",
  "checkoutId" : "CHF_01CAQDPSAJ8H0BCAXVJFT87TQZ",
  "amount" : "105.00",
  "checkoutFields" : {
    "company" : "Ledner, Toy and Roob",
    "billing_name" : "Luella King",
    "billing_state" : "California",
    "billing_city" : "Sofiabury",
    "billing_address" : "626 Maggie Divide",
    "billing_address2" : "Apt. 441"
  },
  "meta" : {
    "customField" : "customValue"
  },
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

