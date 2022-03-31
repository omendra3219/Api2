'use strict';


/**
 * List IRS Reporting
 * Statistical data of IRS Reporting
 *
 * aPIVersion String  (optional)
 * returns IRSReporting
 **/
exports.list IRS Reporting = function(aPIVersion) {
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

