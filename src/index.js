import CurrencyExchange from "./js/api-call";
import "./css/styles.css";

//User Interface Logic~~~~
function printExchange (exchangeResult) {
  console.log(exchangeResult["conversion_rates"]["USD"]);
  document.getElementById("currency-value").innerText = `${exchangeResult["conversion_rates"]["USD"]}`;
  let userUSDInput = document.getElementById("user-input-USD-number").value;
  console.log(userUSDInput);
}
//search the query using ${`thing`}, use switch cases, maybe have this on a separate js file.

function printErrorExchange(errorAPI) {
  document.getElementById("error-title").innerText = `API Error Code: ${errorAPI[1].status}`;
  document.getElementById("error-message").innerText = `Error: ${errorAPI[0]["error-type"]}`;
  document.getElementsByClassName("container-error")[0].removeAttribute("class", "hidden");
}

const handleFormSubmission = (event) => {
  event.preventDefault();
  let promise = CurrencyExchange.getExchange();
  promise.then(function (exchangeDataArray) {
    printExchange(exchangeDataArray);
    console.log(exchangeDataArray);
  },function (errorArray) {
    printErrorExchange(errorArray);
  });
};

window.addEventListener("load", function () {
  const userInput = document.getElementById("form-input");
  userInput.addEventListener("submit", handleFormSubmission);
});