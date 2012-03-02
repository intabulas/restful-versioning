// Copyright 2012 Mark Lussier & Jeremy Pruitt All rights reserved.

/**
 * Returns a plugin that will extract the api version from the Accept header in an very 
 * opinionated form. ie:  Accept: application/vnd.intabulas+json; version = 1.0
 *
 * @param {String} optional regular expression to override the default
 * @return {Function} restify handler.
 */
function versionParser(options,expression) {
	
  // Extracts version from an accept param: ex: 'application/vnd.intabulas+json; version = 1.0'
  if (!expression) {
     expression = /;[ ]*version[ :=]+([^$;]+)/i
  }
	
  return function parseAcceptVersion(req, res, next) {
	  api_version = '*';
	  
      if ( options.useQuality) {
		  api_version = req.accept.quality
      } else {
		  api_version = req.headers['accept'].match(expression);	  
      }

	  if ( api_version) {
		  req.headers['X-Api-Version'] = api_version[1];
	  }
      return next();
  };
}

module.exports = versionParser;
