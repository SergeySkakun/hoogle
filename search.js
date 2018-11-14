// insert here your debounce function

function startSearch(event) {

  var searchText = event.target.value;
  getSuggestions(searchText, showSuggestions);
}