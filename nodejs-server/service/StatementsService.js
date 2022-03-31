'use strict';


/**
 * List Statements
 * Statistical data of statements
 *
 * aPIVersion String  (optional)
 * returns Statements
 **/
exports. List Statements = function(aPIVersion) {
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

