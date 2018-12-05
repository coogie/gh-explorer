import React from "react";

import { SearchResults } from "../";

const mockProps = {
  isLoading: false,
  results: [
    {
      name: "react",
      html_url: "https://github.com/facebook/react",
      description:
        "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      updated_at: "2018-12-05T22:27:34Z",
      homepage: "https://reactjs.org",
      stargazers_count: 117028,
      stargazers_count_formatted: "117,028",
      owner: {
        login: "facebook",
        avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
        html_url: "https://github.com/facebook"
      }
    },
    {
      name: "react-native",
      html_url: "https://github.com/facebook/react-native",
      description: "A framework for building native apps with React.",
      updated_at: "2018-12-05T23:05:39Z",
      homepage: "https://facebook.github.io/react-native/",
      stargazers_count: 71617,
      stargazers_count_formatted: "71,617",
      owner: {
        login: "facebook",
        avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
        html_url: "https://github.com/facebook"
      }
    }
  ]
};

describe("SearchResults Component", () => {
  it("should render a list of results", () => {
    const wrapper = shallow(<SearchResults {...mockProps} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should display a count of how many results are visible", () => {
    const wrapper = shallow(<SearchResults {...mockProps} />);
    const list = wrapper.find(".SearchResults__list");

    expect(list.prop("header")).toBe("Showing 2 results");
  });

  it("should NOT display a count of how many results are visible when no results", () => {
    const props = {
      ...mockProps,
      results: []
    };
    const wrapper = shallow(<SearchResults {...props} />);
    const list = wrapper.find(".SearchResults__list");

    expect(list.prop("header")).toBe(null);
  });
});
