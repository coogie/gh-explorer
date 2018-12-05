import React, { PureComponent } from "react";
import { bool, string } from "prop-types";
import { Alert } from "antd";

export class AlertMessage extends PureComponent {
  static propTypes = {
    isVisible: bool,
    message: string
  };
  static defaultProps = {
    isVisible: false,
    message: null
  };

  render() {
    const { isVisible, message } = this.props;
    return isVisible ? <Alert message={message} showIcon /> : null;
  }
}
