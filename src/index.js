import CurrencyExchange from "./js/api-call";
import "./css/styles.css";

//User Interface Logic~~~~
function printExchange (exchangeResult) {
  const currencyValue = document.getElementById("currency-value");
  currencyValue.innerText = exchangeResult.conversion_rates;
}


function printErrorExchange(errorAPI) {
  document.getElementById("error-title").innerText = errorAPI.Status;
  document.getElementById("error-message").innerText = errorAPI["error-type"];
}

const handleFormSubmission = (event) => {
  event.preventDefault();

  let promise = CurrencyExchange.getExchange();
  promise.then(function (exchangeData) {
    printExchange(exchangeData);
    console.log(exchangeData);
  }, function (errorExchangeData) {
    console.log(errorExchangeData);
    printErrorExchange(errorExchangeData);
  });
};

window.addEventListener("load", function () {
  const userInput = document.getElementById("form-input");
  userInput.addEventListener("submit", handleFormSubmission);
});