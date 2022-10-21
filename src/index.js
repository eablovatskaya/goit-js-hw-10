import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import {
  inputRef,
  countriesListRef,
  countryRef,
  markupList,
  markupCountry,
  clearHTML,
} from './js/markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  const query = e.target.value.trim().toLowerCase();

  function notifyTooMuch() {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
  if (!query) {
    clearHTML();
    return;
  }
  fetchCountries(query)
    .then(data => {
      if (data.length > 10) {
        notifyTooMuch();
        return;
      }
      if (data.length >= 2 && data.length <= 10) {
        clearHTML();
        const markupL = markupList(data);
        countriesListRef.insertAdjacentHTML('beforeend', markupL);
      }
      if (data.length === 1) {
        clearHTML();
        const markupForCountry = markupCountry(data[0]);
        countryRef.insertAdjacentHTML('beforeend', markupForCountry);
      }
    })
    .catch(err => console.log(err));
}
