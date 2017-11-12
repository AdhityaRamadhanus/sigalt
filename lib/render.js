'use strict';

const Table = require('cli-table');
const logUpdate = require('log-update');
const formatCurrency = require('format-currency');
const { map } = require('lodash');

exports.renderPlainText = (message) => {
  logUpdate(message);
};

exports.renderTable = (renderOutput) => {
  const trades = renderOutput.trades || [];
  const tradeAnalysis = renderOutput.tradeAnalysis || {};
  const { title } = renderOutput;
  const table = new Table({ head: ['id', 'timestamps', 'type', 'price', 'amount'] });

  const presentTrades = map(trades, trade => map(trade, val => val)).slice(0, 10);
  table.push(...presentTrades);
  logUpdate(
    title,
    `\n${table.toString()}`,
    `\nSells: ${tradeAnalysis.sell.number}, Volumes: ${formatCurrency(tradeAnalysis.sell.volumes, { format: '%s %v', symbol: 'Rp' })}`,
    `\nBuys: ${tradeAnalysis.buy.number}, Volumes: ${formatCurrency(tradeAnalysis.buy.volumes, { format: '%s %v', symbol: 'Rp' })}`
  );
};
