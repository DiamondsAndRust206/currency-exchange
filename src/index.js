import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyConversionApi } from './js/conversion.js';

async function convertCurrency() {
  let amount = $("#number-input").val();
  let option = $("option");
  let currency;
  if(option === "euro") {
    currency = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/EUR/${amount}`
  }
  $('#output').text("Your US Dollars exchange at a rate of ");
}

$(document).ready(function () {
  $("#form").submit(async function (event) {
    event.preventDefault();
    let amount = $('#number-input').val();
    convertCurrency(amount);
    });
  });

