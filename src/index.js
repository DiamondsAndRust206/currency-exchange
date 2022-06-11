import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyConversionApi } from './js/conversion.js';

async function convertCurrency() {
  let amount = $("#number-input").val();
  const currencyType = $("input:radio[name=operator]:checked").val();
  let currency;
  if (currencyType === "pnd") {
    currency = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/GBP/${amount}`;
}

$(document).ready(function () {
  $("#form").submit(async function (event) {
    event.preventDefault();
    let amount = $('#number-input').val();
    convertCurrency(amount);
    });
  });

