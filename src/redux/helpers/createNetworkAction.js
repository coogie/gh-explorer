import { upperCase, camelCase } from "change-case";

const createAction = actionName => {
  const action = upperCase(actionName);

  return {
    [action]: action,
    [camelCase(actionName)]: payload => ({
      type: action,
      payload
    })
  };
};

export const createNetworkAction = name => ({
  ...createAction(`${name}_REQUEST`),
  ...createAction(`${name}_RESPONSE`),
  ...createAction(`${name}_ERROR`)
});

class FetchError extends Error {
  constructor(response, ...params) {
    super(params);
    console.log(response);
    this.message = `HTTP status code: ${response.status}`;
    this.status = response.status;
    this.response = response;
  }
}

export function wrappedFetch() {
  return fetch.apply(null, arguments).then(response => {
    if (!response.ok) {
      throw new FetchError(response);
    }

    return response;
  });
}
