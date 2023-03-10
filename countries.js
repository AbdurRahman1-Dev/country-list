const loadCountries = () =>{
  fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(json => display(json.slice(0, 4)))
}

const display = (data) => {
  var divContainer = document.getElementById('country-container')
    data.map(x => {
      let {name, capital, region, population} = x
      let flag = x.flags.png;
      console.log(x.cioc);
      const countryDiv = document.createElement('div');
      countryDiv.classList.add("countryStyle")
      countryDiv.innerHTML = `
        
        <img class="flag" src="${flag}" alt="">
        <h1>Name: ${name}</h1>
        <h2>Capital: ${capital ? capital : "No Capital"}</h2>
        <h3>Region: ${region}</h3>
        <h4>Population: ${population}</h4>
      `;
      divContainer.appendChild(countryDiv)
    })
}

const showAll = () => {
  fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(json => display(json.slice(4)))
}
loadCountries()