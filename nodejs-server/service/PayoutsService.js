'use strict';


/**
 * List Payouts
 * Statistical data of payouts
 *
 * aPIVersion String  (optional)
 * returns Payouts
 **/
exports. List Payouts = function(aPIVersion) {
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

