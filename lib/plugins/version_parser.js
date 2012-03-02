// Copyright 2012 Mark Lussier & Jeremy Pruitt All rights reserved.

/**
 * Returns a plugin that will extract the api version from the Accept header in an very 
 * opinionated form. ie:  Accept: application/vnd.intabulas+json; version = 1.0
 *
 * @param {String} optional regular expression to override the default
 * @return {Function} restify handler.
 */
function versionParser(options,expression) {
	
  if (options.useQuality) {
	  console.log("options.useQuality")
  }	 else {
  	
  }
	
  if (!expression) {
     expression = /;[ ]*version[ :=]+([^$;]+)/i
  }
	
  return function parseAcceptVersion(req, res, next) {
	  console.log("options", options);
	  // @TODO We could use the accepts.quality as it genericaly can parse the second param
	  //       that is delimited with an equal (=) 
	  api_version = req.headers['accept'].match(expression);	  
	  if ( api_version) {
		  req.headers['X-Api-Version'] = api_version[1];
	  }
      return next();
  };
}

module.exports = versionParser;
