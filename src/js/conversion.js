export default class CurrencyConversionApi {
  static getCurrency(amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.evn.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.error-type);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}
