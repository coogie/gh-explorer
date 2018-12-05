import React from "react";

import { SearchForm } from "../";

const mockChange = jest.fn();
const mockSubmit = jest.fn();
const mockPreventDefault = jest.fn();

const mockProps = {
  userInput: "Testy McTestface",
  isLoading: false,
  onChange: mockChange,
  onSubmit: mockSubmit
};

describe("SearchForm Component", () => {
  beforeEach(() => {
    mockChange.mockClear();
    mockSubmit.mockClear();
    mockPreventDefault.mockClear();
  });

  it("should call onChange with the event when the user updates the input", () => {
    const wrapper = shallow(<SearchForm {...mockProps} />);
    const input = wrapper.find(".SearchForm__input");

    input.simulate("change", {
      target: { value: "Updated!" }
    });

    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith({
      target: { value: "Updated!" }
    });
  });

  it("should submit the current input when the user clicks the Search button", () => {
    const wrapper = shallow(<SearchForm {...mockProps} />);
    const button = wrapper.find(".SearchForm__button");

    button.simulate("click", {
      preventDefault: mockPreventDefault
    });

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockPreventDefault).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith("Testy McTestface");
  });
});
