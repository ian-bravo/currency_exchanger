import CurrencyExchange from "./js/api-call";

//User Interface Logic~~~~
function printExchange {

};


function printErrorExchange(errorExchangeData) {
  
};

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