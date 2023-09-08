import CurrencyExchange from "./js/api-call";
import "./css/styles.css";

//User Interface Logic~~~~
function printExchange (exchangeResult) {
  console.log(["conversion_rates"]);
  document.getElementById("currency-value").innerText = `${exchangeResult["conversion_rates"]}`;
}


function printErrorExchange(errorAPI) {
  document.getElementById("error-title").innerText = `API Error Code: ${errorAPI[1].status}`;
  document.getElementById("error-message").innerText = `Error: ${errorAPI[0]["error-type"]}`;
  document.getElementsByClassName("container-error")[0].removeAttribute("class", "hidden");
}

const handleFormSubmission = (event) => {
  event.preventDefault();

  let promise = CurrencyExchange.getExchange();
  promise.then(function (exchangeData) {
    printExchange(exchangeData);
    console.log(exchangeData);
  }, function (errorExchangeData) {
    printErrorExchange(errorExchangeData);
  });
};

window.addEventListener("load", function () {
  const userInput = document.getElementById("form-input");
  userInput.addEventListener("submit", handleFormSubmission);
});