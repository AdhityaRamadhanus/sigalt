'use strict';

const monitor = require('./monitor');

module.exports = (program) => {
  program
    .command('monit [coinName]')
    .description('Monitor latest market activity on this cryptocurrency')
    .option('-i, --interval [interval]', 'Check interval')
    .action((coinName, options) => {
      const interval = +options.interval * 5000 || 5000;
      monitor.monitorMarket(coinName, interval);
    });

  program
    .command('*')
    .action(() => {
      program.help();
    });
};
