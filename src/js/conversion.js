export default class CurrencyConversion {
  static getCurrency(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/37e98494cb10338ff8261fb2/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}