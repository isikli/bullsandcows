import React from "react";
import PropTypes from "prop-types";
import "./CalculateButton.css";

export default class CalculateButton extends React.Component {
  static propTypes = {
    disable: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler();
  };

  render() {

    return (
      <div className="calculate-button">
        <button disabled={this.props.disable.localeCompare ("yes") > -1} onClick={this.handleClick}> Check </button>
      </div>
    );
  }
}
