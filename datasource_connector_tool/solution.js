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
    // const newprices = {
    //  price: prices,
    //  mid: function() {
    //   return (price.buy  + price.sell) /2;
    // },
    // quote: function() {
    //  return price.pair.substring(3,5);
    // },
    // }
    let id = 0;
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
 
let ds = new Datasource();
// ds.getPrices();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.log(error);
    });