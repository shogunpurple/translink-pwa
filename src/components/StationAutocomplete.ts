import { STATION_CODES } from "../constants";
import { Station } from "../types/index";

const StationAutocomplete = {
  template: `
    <h1>Which Station?</h1>
    <div class="autocomplete">
      <input 
        class="autocomplete__input" 
        type="text"
        placeholder="Enter Station.."
        aria-label="Enter Station.."
      ></input>
      <ul class="autocomplete__options">
      </ul>
    </div>
  `,
  renderOptions: function() {
    const input = <HTMLInputElement> document.querySelector('.autocomplete__input');
    const autocompleteOptions = STATION_CODES
        .filter((station: Station) => station.name.startsWith(input.value))
        .map((autocompleteOption: Station) => `<li class="autocomplete__item">${autocompleteOption.name}</li>`)
        .join('');
      
    document.querySelector('.autocomplete__options').innerHTML = autocompleteOptions;
  },
  render: function() {
    document.querySelector('.app__container').innerHTML = this.template;
  }
};

export default StationAutocomplete;