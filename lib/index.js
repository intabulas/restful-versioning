// Copyright 2012 Mark Lussier & Jeremy Pruitt All rights reserved.

var fs = require('fs');
var path = require('path');

// Exports

module.exports = {};

// Just load up all the JS in this directory and export it.
fs.readdirSync(__dirname + "/plugins").forEach(function (file) {
  if (!/.+\.js$/.test(file))
    return;

  var plugin = require('./plugins/' + path.basename(file, '.js'));

  if (plugin && plugin.name)
    module.exports[plugin.name] = plugin;
});
