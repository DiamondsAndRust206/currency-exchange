export default class CurrencyConversionApi {
  static getCurrency(amount) {
    return fetch(`${amount}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response["error-type"]);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}
