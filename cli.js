#!/usr/bin/env node
'use strict';

var program = require('commander');

program
  .usage('PACKAGE')
  .version(require('./package').version, '-v, --version')
  .parse(process.argv);

var pkg = program.args[0];

if (!pkg) {
  return program.help();
}

require('./')(pkg);
