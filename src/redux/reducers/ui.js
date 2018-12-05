import {
  REQUEST_SEARCH,
  ERROR_SEARCH,
  RECIEVE_NO_SEARCH_RESULTS
} from "../actions/searchForm";

const defaultState = {
  alert: {
    isVisible: false,
    message: null
  }
};

export const ui = (state = defaultState, payload) => {
  switch (payload.type) {
    case REQUEST_SEARCH:
      return {
        ...state,
        alert: {
          ...state.alert,
          isVisible: false
        }
      };
    case RECIEVE_NO_SEARCH_RESULTS:
    case ERROR_SEARCH:
      return {
        ...state,
        alert: {
          ...state.alert,
          isVisible: true,
          message: payload.message
        }
      };
    default:
      return state;
  }
};
