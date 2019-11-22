(() => {
  console.log("fired");

  //declare variables
  let dataMain = document.querySelector(".main");

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
