import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    x: PropTypes.string,
    y: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.x, this.props.y);
  };

  render() {

    return (
      <div className="component-button">
        <button className={"component-button-" + this.props.x} onClick={this.handleClick}></button>
      </div>
    );
  }
}
