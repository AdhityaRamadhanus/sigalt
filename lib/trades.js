'use strict';

const axios = require('axios');
const {
  map, filter, sortBy, reduce,
} = require('lodash');

exports.analyzeTrades = (trades) => {
  const sellTrades = filter(trades, trade => trade.type === 'sell');
  const buyTrades = filter(trades, trade => trade.type === 'buy');

  const sellVolumes = reduce(sellTrades, (sum, curr) => sum + (+curr.amount), 0);
  const buyVolumes = reduce(buyTrades, (sum, curr) => sum + (+curr.amount), 0);

  const sortedTrades = sortBy(trades, 'id');
  const startRange = new Date(sortedTrades[0].timestamps * 1000);
  const endRange = new Date(sortedTrades[sortedTrades.length - 1].timestamps * 1000);

  return {
    sell: {
      number: sellTrades.length,
      volumes: sellVolumes,
    },
    buy: {
      number: buyTrades.length,
      volumes: buyVolumes,
    },
    startDate: startRange,
    endDate: endRange,
  };
};

exports.getTrades = URL => axios.get(URL)
  .then((response) => {
    const { last_trades: currTrades } = response.data;
    if (currTrades) {
      return map(currTrades, trade => ({
        id: +trade.id,
        timestamps: trade.trade_time,
        type: trade.type,
        price: trade.price,
        amount: trade.rp,
      }));
    }
    return [];
  });
