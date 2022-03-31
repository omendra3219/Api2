'use strict';


/**
 * Create Token
 * Create the token of given payment data. Get token method require type of given object
 *
 * body Object 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create Token = function(body,aPIVersion) {
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

