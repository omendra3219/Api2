'use strict';


/**
 * Create a Customer
 *
 * body V1_customers_body 
 * aPIVersion String  (optional)
 * returns Customer
 **/
exports.create a Customer = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zip" : "zip",
  "country" : "country",
  "metadata" : "metadata",
  "website" : "website",
  "address" : "address",
  "address2" : "address2",
  "city" : "city",
  "companyName" : "companyName",
  "phone" : "phone",
  "paymentMethods" : {
    "Array" : [ {
      "nickname" : "nickname",
      "token" : "token"
    }, {
      "nickname" : "nickname",
      "token" : "token"
    } ]
  },
  "name" : "name",
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
 * List Customer
 *
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Customers = function(aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "website" : "https://example.com",
    "city" : "New York",
    "name" : "Michael Smith",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "zip" : "10010",
    "email" : "hello@seamlesspay.com",
    "state" : "NY",
    "country" : "USA",
    "address2" : "10th Fl",
    "paymentMethods" : [ {
      "name" : "Michael Smith",
      "billingCountry" : "USA",
      "routingNumber" : "123456789",
      "email" : "hello@seamlesspay.com",
      "billingAddress" : "400 Madison Ave",
      "txnType" : "CREDIT_CARD",
      "billingZip" : "10010",
      "billingCity" : "New York",
      "billingAddress2" : "10th Fl",
      "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
      "lastFour" : "4242",
      "billingState" : "NY",
      "phone" : "2125555000",
      "nickname" : "Visa card"
    } ],
    "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
    "companyName" : "ABC Business",
    "createdAt" : "2017-12-15T19:08:18.262Z",
    "address" : "400 Madison Ave",
    "metadata" : {
      "customOption" : "example"
    },
    "phone" : "2125555000"
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
 * Retrieve a Customer
 *
 * customer_id String 
 * returns Object
 **/
exports.retrieve a Customer = function(customer_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "address" : "400 Madison Ave",
  "address2" : "10th Fl",
  "companyName" : "ABC Business",
  "city" : "New York",
  "country" : "USA",
  "email" : "hello@seamlesspay.com",
  "metadata" : {
    "customOption" : "example"
  },
  "name" : "Michael Smith",
  "phone" : "2125555000",
  "paymentMethods" : [ {
    "billingAddress" : "400 Madison Ave",
    "billingAddress2" : "10th Fl",
    "billingCity" : "New York",
    "billingState" : "NY",
    "billingZip" : "10010",
    "billingCountry" : "USA",
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "txnType" : "CREDIT_CARD"
  } ],
  "state" : "NY",
  "zip" : "10010",
  "website" : "https://example.com",
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


/**
 * Update a Customer
 *
 * body Customers_customer_id_body 
 * customer_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.update a Customer = function(body,customer_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "address" : "400 Madison Ave",
  "address2" : "10th Fl",
  "companyName" : "ABC Business",
  "city" : "New York",
  "country" : "USA",
  "email" : "hello@seamlesspay.com",
  "metadata" : {
    "customOption" : "example"
  },
  "name" : "Michael Smith",
  "phone" : "2125555000",
  "paymentMethods" : [ {
    "billingAddress" : "400 Madison Ave",
    "billingAddress2" : "10th Fl",
    "billingCity" : "New York",
    "billingState" : "NY",
    "billingZip" : "10010",
    "billingCountry" : "USA",
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "txnType" : "CREDIT_CARD"
  } ],
  "state" : "NY",
  "zip" : "10010",
  "website" : "https://example.com",
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

