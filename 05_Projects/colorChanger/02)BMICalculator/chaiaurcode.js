const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  let results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `bmi : ${bmi}`;
    if(bmi <18.6) results.innerHTML = ` ${bmi} under weinght`
    if (bmi >= 18.6 && bmi <= 24.9) results.innerHTML = ` ${bmi} Normal weinght`;
    if (bmi > 18.6) results.innerHTML = ` ${bmi} Greater weight`;
  }
});
