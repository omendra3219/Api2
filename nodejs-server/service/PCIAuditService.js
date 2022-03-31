'use strict';


/**
 * List PCI Audit
 * Statistical data of PCI Audit
 *
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list PCI Audit = function(aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "assessor" : "Trustwave",
  "companyName" : "ABC Business",
  "complianceProgram" : "SAQ_AND_SCAN",
  "customerID" : "3425324",
  "dateAdded" : "07/02/2014",
  "dateRegistered" : "08/27/2014",
  "firstCertDate" : "08/26/2014",
  "lastLoginDate" : "08/27/2014",
  "merchantStatus" : "ACTIVE",
  "merchantType" : "INET-PA",
  "mostRecentSaqDate" : "08/27/2014",
  "mostRecentScanDate" : "10/27/2016",
  "pciExpiry" : "08/26/2015",
  "pciLevel" : 4,
  "pciStatus" : "EXPIRED",
  "primaryMerchantID" : "3544325243543232",
  "primaryPocEmail" : "email@merchant.com",
  "primaryPocLastName" : "Gaon",
  "saqExpiry" : "08/26/2015",
  "saqStatus" : "EXPIRED",
  "saqType" : "SAQ_C",
  "scanExpiry" : "01/26/2017",
  "scanStatus" : "PASS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

