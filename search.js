function startSearch(event) {
  // insert here your debounce function

  var searchText = event.target.value;
  getSuggestions(searchText, showSuggestions);
}