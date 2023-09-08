import CurrencyExchange from "./js/api-call";
import "./css/styles.css";

//User Interface Logic~~~~
function printExchange (exchangeResult) {
  const currencyValue = document.getElementById("currency-value");
  currencyValue.innerText = exchangeResult.conversion_rates;
}


function printErrorExchange(errorAPI) {
  document.getElementById("error-message").innerText = errorAPI.error;
}

const handleFormSubmission = (event) => {
  event.preventDefault();

  let promise = CurrencyExchange.getExchange(currency);
  promise.then(function (exchangeData) {
    printExchange(exchangeData);
  }, function (errorExchangeData) {
    printErrorExchange(errorExchangeData);
  });
};

window.addEventListener("load", function () {
  const userInput = document.getElementById("form-input");
  userInput.addEventListener("submit", handleFormSubmission);
});