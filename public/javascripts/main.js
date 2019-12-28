(() => {
  console.log("fired");

  //declare variables
  let dataMain = document.querySelector(".main"),
    submit = document.querySelector("button");

  let temp = document.querySelector(".temp");

  function parseData(data) {
    temp.innerHTML = data.main.temp;
  }

  function fetchData(e) {
    e.preventDefault();
    console.log(e);
    let link = "https://api.openweathermap.org/data/2.5/weather?q=";
    let api_key = "&appid=05bb610c5b145f70cd91f5ad63c99529";
    let celcius = "&units=metric";
    let input = document.querySelector("input");
    let city = input.value;
    let url = link + city + api_key + celcius;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.main == undefined) {
          temp.innerHTML = "We cannot find this city, try again";
        } else {
          parseData(data);
        }
      });
  }

  submit.addEventListener("click", fetchData);

  function settingUI(main) {
    //setting UI for weather
    if (main === "Rain") {
      document.body.classList.add("rainy");
    } else if (main === "Clouds") {
      document.body.classList.add("cloudy");
    } else if (main === "Clear") {
      document.body.classList.add("sunny");
    }
  }

  settingUI(dataMain.innerHTML);
})();
