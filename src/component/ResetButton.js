import React from "react";
import PropTypes from "prop-types";
import "./ResetButton.css";

export default class ResetButton extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler();
  };

  render() {

    return (
      <div className="reset-button">
        <button    onClick={this.handleClick}> Reset </button>
      </div>
    );
  }
}
