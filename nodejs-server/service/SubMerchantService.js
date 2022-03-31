'use strict';


/**
 * Create Sub-Merchant
 * Sub-Merchant
 *
 * body V1_submerchants_body 
 * aPIVersion String  (optional)
 * returns SubMerchant
 **/
exports.create SubMerchant = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zip" : "zip",
  "country" : "country",
  "DDAnumber" : "DDAnumber",
  "lastName" : "lastName",
  "address2" : "address2",
  "city" : "city",
  "address1" : "address1",
  "businessName" : "businessName",
  "dateOfBirth" : "dateOfBirth",
  "subMerchantEntityName" : "subMerchantEntityName",
  "ssn" : "ssn",
  "firstName" : "firstName",
  "routingNumber" : "routingNumber",
  "splitProgram" : "splitProgram",
  "phone" : "phone",
  "taxID" : "taxID",
  "state" : "state",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Sub-Merchants
 * Sub-Merchant
 *
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list SubMerchants = function(aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "SMT_01C5KKZEAM92FB2ZM3XJTKDEPP",
    "subMID" : "54648651",
    "masterMID" : "32462476",
    "subMerchantEntityName" : "TEST",
    "masterDescriptor" : true,
    "splitProgramID" : "SP_01BBC61NYHG6AR5T35D5Q1ZBFC",
    "subMerchantEmail" : "test@test.com",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Sub-Merchant
 * Retrieve Sub-Merchant
 *
 * submerchant_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve SubMerchant = function(submerchant_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "SMT_01C5KKZEAM92FB2ZM3XJTKDEPP",
  "subMID" : "54648651",
  "masterMID" : "32462476",
  "subMerchantEntityName" : "TEST",
  "masterDescriptor" : true,
  "splitProgramID" : "SP_01BBC61NYHG6AR5T35D5Q1ZBFC",
  "subMerchantEmail" : "test@test.com",
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

