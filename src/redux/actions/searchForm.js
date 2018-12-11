import { createNetworkAction, wrappedFetch } from "../helpers";

const endpoint = {
  General: input => `https://api.github.com/search/repositories?q=${input}`,
  Specific: input => `https://api.github.com/repos/${input}`
};

const asyncActions = {
  ...createNetworkAction("SEARCH_GENERAL"),
  ...createNetworkAction("SEARCH_SPECIFIC")
};

const CHANGE_SEARCH_INPUT = "CHANGE_SEARCH_INPUT";
const changeSearchInput = input => ({
  type: CHANGE_SEARCH_INPUT,
  payload: input
});

const SUBMIT_SEARCH = "SUBMIT_SEARCH";
const submitSearch = input => dispatch => {
  const type = input.indexOf("/") > 0 ? "Specific" : "General";
  const searchSuccess = data => {
    const payload = {
      General: data.items,
      Specific: data
    };
    return dispatch(asyncActions[`search${type}Response`](payload[type]));
  };

  dispatch(asyncActions[`search${type}Request`]());

  return wrappedFetch(endpoint[type](input)).then(
    response => response.json().then(searchSuccess),
    error => {
      console.log(error);
      const message = error.status === 404 ? "Repo not found" : error.message;
      dispatch(asyncActions[`search${type}Error`](message));
    }
  );
};

export default {
  CHANGE_SEARCH_INPUT,
  changeSearchInput,
  SUBMIT_SEARCH,
  submitSearch,
  ...asyncActions
};
