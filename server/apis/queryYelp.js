var authKeys = require("../yelpKeys");
var yelp = require("yelp").createClient(authKeys);

/**
* Scrapes news.google.com and returns an array of results;
* @function queryGoogle
* @memberof module:queryGoogle
* @instance
* @param {string} query Search Term on news.google.com
* @param {string} location Search Location (City || State || Zip || Country) on news.google.com
* @param {number} queryAmount Number of results to return - Max 50 
* @param {function} callback Callback function is invoked with results of query - callback(err, results)
*/
module.exports = function(params, callback) {
 
  yelp.search({term: "food", location: params.city}, function(error, dataFood) {
  	
  	if (error) console.log(error);
	  console.log(dataFood);
	  callback(error, dataFood);

  });
};

// See http://www.yelp.com/developers/documentation/v2/search_api
// yelp.search({term: "food", location: "Montreal"}, function(error, data) {
//   console.log(error);
//   console.log(data);
// });

// See http://www.yelp.com/developers/documentation/v2/business
// yelp.business("yelp-san-francisco", function(error, data) {
//   console.log(error);
//   console.log(data);
// });
