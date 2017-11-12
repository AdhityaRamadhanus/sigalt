'use strict';

const logUpdate = require('log-update');
const readline = require('readline');
const renderer = require('../lib/render');
const libTrades = require('../lib/trades');
const { unionBy, sortBy } = require('lodash');
let allTrades = [];

async function _monitorMarket(coinName) {
  try {
    let apiUrl = `https://vip.bitcoin.co.id/api/webdata/${coinName}`;
    let currTrades = await libTrades.getTrades(apiUrl);
    if (!currTrades || currTrades.length === 0) throw new Error('Malformed response/network error');

    allTrades = sortBy(unionBy(allTrades, currTrades, 'id'), 'id');
    if (allTrades.length > 1000) allTrades = allTrades.slice(allTrades.length - 1000, allTrades.length); 

    let tradeAnalysis = libTrades.analyzeTrades(allTrades);

    renderer.renderTable({
      title: `${coinName} Latest Market Activity`,
      trades: currTrades,
      tradeAnalysis
    });
  } catch(err) {
    renderer.renderPlainText(`${new Date} - ${err.message}`);
  }
}

exports.monitorMarket = (coinName, interval) => {
  logUpdate.clear();

  let ticker = setInterval(() => _monitorMarket(coinName), interval);

  const rl = readline.createInterface({
    input: process.stdin
  });

  rl.on('line', (input) => {
    switch(input) {
      case 'clear':
        logUpdate.clear();
        break;
      case 'stop':
        clearInterval(ticker);
        break;
      case 'start':
        logUpdate.clear();
        ticker = setInterval(() => _monitorMarket(coinName), interval);
        break;
    }
  });
};