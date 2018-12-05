export const CHANGE_SEARCH_INPUT = "CHANGE_SEARCH_INPUT";
export const changeSearchInput = input => ({
  type: CHANGE_SEARCH_INPUT,
  input
});

export const REQUEST_SEARCH = "REQUEST_SEARCH";
export const requestSearch = () => ({
  type: REQUEST_SEARCH
});

export const ERROR_SEARCH = "ERROR_SEARCH";
export const errorSearch = message => ({
  type: ERROR_SEARCH,
  message
});

export const RECIEVE_SEARCH_RESULTS = "RECIEVE_SEARCH_RESULTS";
export const recieveSearchResults = results => ({
  type: RECIEVE_SEARCH_RESULTS,
  results
});

export const RECIEVE_NO_SEARCH_RESULTS = "RECIEVE_NO_SEARCH_RESULTS";
export const recieveNoSearchResults = () => ({
  type: RECIEVE_NO_SEARCH_RESULTS,
  message: "No search results found!"
});

export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const submitSearch = input => dispatch => {
  dispatch(requestSearch());
  return fetch(`https://api.github.com/search/repositories?q=${input}`)
    .then(response => response.json(), error => errorSearch(error.message))
    .then(({ items }) => {
      if (items && items.length > 0) {
        dispatch(recieveSearchResults(items));
      } else {
        dispatch(recieveNoSearchResults());
      }
    });
};
