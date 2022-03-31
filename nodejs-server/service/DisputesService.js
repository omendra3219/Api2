'use strict';


/**
 * List Disputes
 * Statistical data of disputes
 *
 * aPIVersion String  (optional)
 * returns Disputes
 **/
exports.list Disputes = function(aPIVersion) {
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

