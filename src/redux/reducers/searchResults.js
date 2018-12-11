import actions from "redux/actions/searchForm";
import { normaliseSearchResults } from "lib/data-normalise";

export const searchResults = (state = [], { type, payload }) => {
  switch (type) {
    case actions.SEARCH_GENERAL_RESPONSE:
      return payload.map(normaliseSearchResults).sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });
    case actions.SEARCH_SPECIFIC_RESPONSE:
      return [normaliseSearchResults(payload)];
    default:
      return state;
  }
};
