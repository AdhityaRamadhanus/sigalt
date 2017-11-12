'use strict';

const program = require('commander');
const commands = require('./commands');

program
  .version('1.0.0');

commands(program);

program.parse(process.argv);
if (!program.args.length) program.help();

