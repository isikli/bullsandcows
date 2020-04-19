import React from "react";
import PropTypes from "prop-types";
import "./GameButton.css";

export default class GameButton extends React.Component {
  static propTypes = {
    x: PropTypes.string,
    y: PropTypes.string,
    backgroundColor:PropTypes.string
  };

  render() {
    return (
      <div className="component-game-button">
        <button style={{backgroundColor:this.props.backgroundColor}}></button>
      </div>
    );
  }
}
