import { STATION_CODES } from "../constants";

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
    const inputValue = document.querySelector('.autocomplete__input').value;
    const autocompleteOptions = STATION_CODES
        .filter(station => station.name.startsWith(inputValue))
        .map(autocompleteOption => `<li class="autocomplete__item">${autocompleteOption.name}</li>`)
        .join('');
      
    document.querySelector('.autocomplete__options').innerHTML = autocompleteOptions;
  },
  render: function() {
    document.querySelector('.app__container').innerHTML = this.template;
  }
};

export default StationAutocomplete;