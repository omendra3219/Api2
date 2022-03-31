'use strict';


/**
 * Create a Customer
 *
 * body Object 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.create a Customer = function(body,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "name" : "Michael Smith",
  "email" : "hello@seamlesspay.com",
  "companyName" : "ABC Business",
  "description" : "ABC Business",
  "metadata" : {
    "customOption" : "example"
  },
  "phone" : "2125555000",
  "website" : "https://example.com",
  "address" : {
    "line1" : "400 Madison Ave",
    "line2" : "10th Fl",
    "city" : "New York",
    "country" : "US",
    "state" : "NY",
    "postalCode" : "10010"
  },
  "paymentMethods" : [ {
    "billingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "paymentType" : "credit_card"
  } ],
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
 * List Customer
 *
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.list Customers = function(aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
    "name" : "Michael Smith",
    "email" : "hello@seamlesspay.com",
    "companyName" : "ABC Business",
    "description" : "ABC Business",
    "metadata" : {
      "customOption" : "example"
    },
    "phone" : "2125555000",
    "website" : "https://example.com",
    "address" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "US",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "paymentMethods" : [ {
      "billingAddress" : {
        "line1" : "400 Madison Ave",
        "line2" : "10th Fl",
        "city" : "New York",
        "country" : "USA",
        "state" : "NY",
        "postalCode" : "10010"
      },
      "phone" : "2125555000",
      "email" : "hello@seamlesspay.com",
      "lastFour" : "4242",
      "name" : "Michael Smith",
      "nickname" : "Visa card",
      "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
      "routingNumber" : "123456789",
      "paymentType" : "credit_card"
    } ],
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
 * Retrieve a Customer
 *
 * customer_id String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.retrieve a Customer = function(customer_id,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "name" : "Michael Smith",
  "email" : "hello@seamlesspay.com",
  "companyName" : "ABC Business",
  "description" : "ABC Business",
  "metadata" : {
    "customOption" : "example"
  },
  "phone" : "2125555000",
  "website" : "https://example.com",
  "address" : {
    "line1" : "400 Madison Ave",
    "line2" : "10th Fl",
    "city" : "New York",
    "country" : "US",
    "state" : "NY",
    "postalCode" : "10010"
  },
  "paymentMethods" : [ {
    "billingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "paymentType" : "credit_card"
  } ],
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
 * body Object 
 * customer_id String 
 * aPIVersion String  (optional)
 * seamlessPayAccount String  (optional)
 * returns Object
 **/
exports.update a Customer = function(body,customer_id,aPIVersion,seamlessPayAccount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "name" : "Michael Smith",
  "email" : "hello@seamlesspay.com",
  "companyName" : "ABC Business",
  "description" : "ABC Business",
  "metadata" : {
    "customOption" : "example"
  },
  "phone" : "2125555000",
  "website" : "https://example.com",
  "address" : {
    "line1" : "400 Madison Ave",
    "line2" : "10th Fl",
    "city" : "New York",
    "country" : "US",
    "state" : "NY",
    "postalCode" : "10010"
  },
  "paymentMethods" : [ {
    "billingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "paymentType" : "credit_card"
  } ],
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

