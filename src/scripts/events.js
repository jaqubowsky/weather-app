import setWeatherData from "./setData";

const events = (function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    const searchValue = document.getElementById("searchBar").value;

    e.preventDefault()
    setWeatherData(searchValue);
    form.reset()
  });

  document.addEventListener("DOMContentLoaded", () => {
    setWeatherData("London");
  });
})();

export { events };
