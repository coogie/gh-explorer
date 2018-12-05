import {
  CHANGE_SEARCH_INPUT,
  REQUEST_SEARCH,
  ERROR_SEARCH,
  RECIEVE_SEARCH_RESULTS,
  RECIEVE_NO_SEARCH_RESULTS
} from "redux/actions/searchForm";

const defaultState = {
  userInput: "",
  isLoading: false
};

export const searchForm = (state = defaultState, payload) => {
  switch (payload.type) {
    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        userInput: payload.input
      };
    case REQUEST_SEARCH:
      return {
        ...state,
        isLoading: true
      };
    case RECIEVE_NO_SEARCH_RESULTS:
    case RECIEVE_SEARCH_RESULTS:
    case ERROR_SEARCH:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
