import React, { Component } from "react";
import { bool, func, string } from "prop-types";
import { Button, Form, Input } from "antd";

const FormItem = Form.Item;

export class SearchForm extends Component {
  static propTypes = {
    userInput: string,
    isLoading: bool,

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
    const { userInput, isLoading, onChange } = this.props;

    return (
      <Form layout="inline" onSubmit={this.submit}>
        <FormItem>
          <Input
            placeholder="Search repositories"
            value={userInput}
            onChange={onChange}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" loading={isLoading} onClick={this.submit}>
            Search
          </Button>
        </FormItem>
      </Form>
    );
  }
}