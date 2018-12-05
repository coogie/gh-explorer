import React from "react";
import { Alert } from "antd";

export const AlertMessage = props => {
  const { isVisible, message } = props;
  return isVisible ? <Alert message={message} showIcon /> : null;
};
