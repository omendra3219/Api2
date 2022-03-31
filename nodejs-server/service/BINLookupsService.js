'use strict';


/**
 * BIN Lookups
 * Retrieves the details of bin
 *
 * bIN String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.bIN Lookups = function(bIN,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bin" : "411111",
  "issuingBank" : "Bank Name",
  "country" : "USA",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "cardDetail" : "True credit (No PIN/Signature capability)",
  "debitNetwork" : "ACCEL FISERV – Pinned POS",
  "debitSignatureNetworkParticipant" : "",
  "fsa" : "No",
  "prepaidIndicator" : "No",
  "productID" : "Visa Classic",
  "regulatorIndicator" : "N",
  "cardClass" : "Consumer"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

