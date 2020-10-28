// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  

const fetch = require("node-fetch");
var url = 'https://static.ngnrs.io/test/prices';

class Datasource {
  getPrices = async () => {
    const res = await fetch(url);
    const json_res = await res.json();
    const prices = json_res.data.prices;

    const len = prices.length;
    for (var i=0; i<len; i++) {
			const oldPrice = prices[i];
			oldPrice.mid = function() {
				return (oldPrice.buy + oldPrice.sell) / 200;
			};
			oldPrice.quote = function() {
				return oldPrice.pair.substring(3,6);
			};
    }
    const promise = new Promise(function(resolve) {
     resolve(prices);
    })
    return promise;
  }
 }