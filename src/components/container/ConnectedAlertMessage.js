import { connect } from "react-redux";
import { AlertMessage } from "../presentational/AlertMessage";

const mapStateToProps = state => {
  const { isVisible, message } = state.ui.alert;
  return {
    isVisible,
    message
  };
};

export const ConnectedAlertMessage = connect(mapStateToProps)(AlertMessage);
