import CurrencyExchange from "./js/api-call";
import "./css/styles.css";

//User Interface Logic~~~~
function printExchange (exchangeResult) {
  let userUSDInput = document.getElementById("user-input-USD-number").value;
  let userCurrencyType = document.getElementById("user-select-currency-type").value;
  let currency = userCurrencyType;
  switch (currency) {
  case ("EUR"):
    document.getElementById("currency-value").innerText = exchangeResult["conversion_rates"]["EUR"] * userUSDInput + " Euros";
    break;
  case ("GBP"):
    document.getElementById("currency-value").innerText = exchangeResult["conversion_rates"]["GBP"] * userUSDInput + " Pounds";
    break;
  case ("JPY"):
    document.getElementById("currency-value").innerText = exchangeResult["conversion_rates"]["JPY"] * userUSDInput + " Yen";
    break;
  case ("KRW"):
    document.getElementById("currency-value").innerText = exchangeResult["conversion_rates"]["KRW"] * userUSDInput + " Won";
    break;
  case ("CNY"):
    document.getElementById("currency-value").innerText = exchangeResult["conversion_rates"]["CNY"] * userUSDInput + " Yuan";
    break;
  default:
    return document.getElementById("currency-value").innerText = "Woops, please enter a 3 letter currency type, in all capitalize, from one of the listed options above, i.e. EUR, etc.";
  }
}

function printErrorExchange(errorAPI) {
  document.getElementById("error-title").innerText = `API Error Code: ${errorAPI[1].status}`;
  document.getElementById("error-message").innerText = `Error: ${errorAPI[0]["error-type"]}`;
}

const handleFormSubmission = (event) => {
  event.preventDefault();
  let promise = CurrencyExchange.getExchange();
  promise.then(function (exchangeDataArray) {
    printExchange(exchangeDataArray);
  },function (errorArray) {
    printErrorExchange(errorArray);
  });
};

window.addEventListener("load", function () {
  const userInput = document.getElementById("form-input");
  userInput.addEventListener("submit", handleFormSubmission);
});