import setWeatherData from "./setData";

const events = (function () {
  const form = document.getElementById("form");
  const switchBtn = document.getElementById("switchButton");

  let baseCity = "Warsaw";
  let baseUnit = "metric";

  form.addEventListener("submit", (e) => {
    const searchValue = document.getElementById("searchBar").value;

    e.preventDefault();

    baseCity = searchValue;
    setWeatherData(searchValue, baseUnit);

    form.reset();
  });

  switchBtn.addEventListener("click", () => {
    switchBtn.checked
      ? (switchBtn.dataset.unit = "standard")
      : (switchBtn.dataset.unit = "metric");

    baseUnit = switchBtn.dataset.unit;

    setWeatherData(baseCity, baseUnit);
  });

  document.addEventListener("DOMContentLoaded", () => {
    setWeatherData(baseCity, baseUnit);
  });
})();

export { events };
