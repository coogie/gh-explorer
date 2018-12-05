import React from "react";

import { AlertMessage } from "../";

describe("AlertMessage Component", () => {
  it("should not render anything by default", () => {
    const wrapper = shallow(<AlertMessage />);
    expect(wrapper.html()).toBe(null);
  });

  it("should not render when it is not visible", () => {
    const props = {
      isVisible: false,
      message: "I'm hiding"
    };
    const wrapper = shallow(<AlertMessage {...props} />);
    expect(wrapper.html()).toBe(null);
  });

  it("should render when it is visible", () => {
    const props = {
      isVisible: true,
      message: "I'm showing!"
    };
    const wrapper = shallow(<AlertMessage {...props} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
