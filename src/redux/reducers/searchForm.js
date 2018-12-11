import actions from "redux/actions/searchForm";

const defaultState = {
  userInput: "",
  isLoading: false,
  alert: {
    isVisible: false,
    message: null
  }
};

export const searchForm = (state = defaultState, { type, payload }) => {
  let newState;

  switch (type) {
    case actions.CHANGE_SEARCH_INPUT:
      newState = {
        ...state,
        userInput: payload
      };
      break;
    case actions.SEARCH_GENERAL_REQUEST:
    case actions.SEARCH_SPECIFIC_REQUEST:
      newState = {
        ...state,
        alert: {
          ...defaultState.alert
        },
        isLoading: true
      };
      break;
    case actions.SEARCH_GENERAL_RESPONSE:
    case actions.SEARCH_SPECIFIC_RESPONSE:
      newState = {
        ...state,
        isLoading: false
      };
      break;
    case actions.SEARCH_GENERAL_ERROR:
    case actions.SEARCH_SPECIFIC_ERROR:
      newState = {
        ...state,
        isLoading: false,
        alert: {
          ...state.alert,
          isVisible: true,
          message: payload
        }
      };
      break;
    default:
      newState = {
        ...state
      };
  }

  return newState;
};
