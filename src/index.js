import './css/styles.css';
import fetchCountries from './fetchCountries.js';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputText: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.inputText.addEventListener("input", debounce(() => {
const name = refs.inputText.value.trim();
if(name === "") {
  return refs.countryInfo.innerHTML ="";
}
fetchCountries(name).then(showCountry).catch(showError)
},DEBOUNCE_DELAY));

function renderMarkup (array){
  return array.map(({flags, name}) => {
    return`<p><img src="${flags.svg}"alt="flag"/>${name.official}</p>`
  }).join("")
};

function createMarkup(data){
  return data.map(({ name, capital, population, flags, languages }) => {
    return `<h1><img src="${flags.svg}" alt="flag"/>${name.official}</h1>
    <ul>
    <li>Capital:<span>${capital}</span></li>
    <li>Population:<span>${population}</span></li>
    <li>Languages:<span>${Oject.values(languages).join(", ")}</span></li>
    </ul>`
  }).join("");
};
function showError(error) {
  console.log(error)
return refs.countryInfo.innerHTML = '';
};

function showCountry(country) {
  if (country.length > 10) {
      return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  }
  if (country.length >= 2) {
      return refs.countryInfo.innerHTML= renderMarkup(country)
  }
  return refs.countryInfo.innerHTML= createMarkup(country)
};


