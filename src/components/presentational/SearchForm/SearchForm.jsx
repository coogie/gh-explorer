import React, { PureComponent } from "react";
import { bool, func, string, shape } from "prop-types";
import { Alert, Button, Form, Input } from "antd";

import "./SearchForm.scss";

const FormItem = Form.Item;

export class SearchForm extends PureComponent {
  static propTypes = {
    userInput: string,
    isLoading: bool,
    alert: shape({
      isVisible: bool,
      message: string
    }),

    onChange: func.isRequired,
    onSubmit: func.isRequired
  };
  static defaultProps = {
    userInput: null,
    isLoading: false
  };

  submit = event => {
    const { userInput, onSubmit } = this.props;
    event.preventDefault();
    onSubmit(userInput);
  };

  render() {
    const { userInput, isLoading, onChange, alert } = this.props;

    return (
      <div className="SearchForm o-container">
        {alert.isVisible && (
          <Alert
            className="SearchForm__alert"
            message={alert.message}
            showIcon
          />
        )}
        <Form
          className="SearchForm__form"
          layout="inline"
          onSubmit={this.submit}
        >
          <FormItem>
            <Input
              className="SearchForm__input"
              placeholder="Search repositories"
              value={userInput}
              onChange={onChange}
            />
          </FormItem>
          <FormItem>
            <Button
              className="SearchForm__button"
              type="primary"
              loading={isLoading}
              onClick={this.submit}
            >
              Search
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
