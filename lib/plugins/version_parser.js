// Copyright 2012 Mark Lussier & Jeremy Pruitt All rights reserved.

/**
 * Returns a plugin that will extract the api version from the Accept header in an very 
 * opinionated form. ie:  Accept: application/vnd.intabulas+json; version = 1.0
 *
 * @param {String} optional regular expression to override the default
 * @return {Function} restify handler.
 */
function versionParser(options) {

  var expression      = /;[ ]*version[ :=]+([^$;]+)/i
  var default_version = '*';
  	
  // Extracts version from an accept param: ex: 'application/vnd.intabulas+json; version = 1.0'
  if (options && options.expression) {
	  expression = options.expression;
  }
	
  return function parseAcceptVersion(req, res, next) {
	  var api_version = default_version;
	  
      if ( options && options.useQuality) {
		  api_version = req.accept[0].quality  // this is bad :(
      } else {
		  matched_version = req.headers['accept'].match(expression);	  
		  if ( matched_version.length > 1) {  // ensure that we found a version (ie: match group 2)
			  api_version = matched_version[1];
		  }		  
      }
	  
      // If omiited defaults to * being latest
	  req.headers['X-Api-Version'] = api_version;

	  return next();
  };
}

module.exports = versionParser;
