import { RECIEVE_SEARCH_RESULTS } from "redux/actions/searchForm";
import { normaliseSearchResults } from "lib/data-normalise";

export const searchResults = (state = [], payload) => {
  switch (payload.type) {
    case RECIEVE_SEARCH_RESULTS:
      return payload.results.map(normaliseSearchResults).sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });
    default:
      return state;
  }
};
