import React from "react";
import PropTypes from "prop-types";
import "./BackButton.css";

export default class BackButton extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    disable:PropTypes.string
  };

  handleClick = () => {
    this.props.clickHandler();
  };

  render() {
    return (
      <div className="back-button">
        <button disabled={this.props.disable.localeCompare ("yes") == 0}   onClick={this.handleClick}> Back </button>
      </div>
    );
  }
}
