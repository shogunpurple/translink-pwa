import { STATION_CODES } from "../constants";
import { Station } from "../types/index";

const StationAutocomplete = {
  template: `
    <h1>Which Station?</h1>
    <div class="autocomplete">
      <input 
        class="autocomplete__input" 
        type="text"
        placeholder="Search.."
        aria-label="Search.."
      ></input>
      <ul class="autocomplete__options">
      </ul>
    </div>
  `,
  renderOptions: function() {
    const input = <HTMLInputElement> document.querySelector('.autocomplete__input');
    const autocompleteOptions = STATION_CODES
        .filter((station: Station) => station.name.toLowerCase().startsWith(input.value.toLowerCase()))
        .map((autocompleteOption: Station) => `<li class="autocomplete__item">${autocompleteOption.name}</li>`)
        .join('');
      
    document.querySelector('.autocomplete__options').innerHTML = autocompleteOptions;
  },
  render: function() {
    document.querySelector('.app__container').innerHTML = this.template;
  }
};

export default StationAutocomplete;