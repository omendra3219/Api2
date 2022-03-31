'use strict';


/**
 * Create a Credit
 * Credit only apply to gift_card transactions
 *
 * body BINLookup 
 * accountNumber|token String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Credits
 **/
exports.create a Credit = function(body,accountNumber|token,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "amount",
  "currency" : "USD"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

