const inputRef = document.querySelector('#search-box');
const countriesListRef = document.querySelector('.country-list');
const countryRef = document.querySelector('.country-info');

function markupList(list) {
  return list
    .map(country => {
      const { name, flags } = country;
      return `<li class="list-item">
      <img src="${flags.svg}" class="flag-svg" width="40" height="20" alt="${name}">
          <p class="item-text">${name}</p>
          </img>
      </li>`;
    })
    .join('');
}

function markupCountry(country) {
  const { name, capital, flags, languages, population } = country;
  const languagesList = languages.map(language => language.name).join(', ');
  return `<div class="info-container">
  <img src="${flags.svg}" class="flag-svg" width="60" height="30" alt='${name}'/>
      <h2 class="country-name">${name}</h2></div>
      <ul class="country-list">
        <li><span class="info-title">Capital: </span>${capital}</li>
        <li><span class="info-title">Population: </span>${population}</li>
        <li><span class="info-title">Languages: </span>${languagesList}</li>
      </ul>`;
}

function clearHTML() {
  countriesListRef.innerHTML = '';
  countryRef.innerHTML = '';
}

export {
  inputRef,
  countriesListRef,
  countryRef,
  markupList,
  markupCountry,
  clearHTML,
};
