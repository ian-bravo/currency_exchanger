export default class CurrencyExchange {
  static getExchange () {
    return new Promise(function (resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function () {
        try {
          const response = JSON.parse(this.responseText);
          if (this.status === 200) {
            resolve(response);
          } else {
            reject([response, this]);
          }
        } catch(error) {
          document.getElementById("error-title").innerText = "404 not found";
          // throw new Error("404 not found"); also remove v6's.
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }  
}