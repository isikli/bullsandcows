import React from "react";
import PropTypes from "prop-types";
import "./TargetPanel.css";

export default class GamePanel extends React.Component {
  static propTypes = {
    backgroundColors:PropTypes.array
  };

  render() {
    return (
      <div className="target-panel">
        <div className="target-panel-row">
          <div className="target-panel-row-button">
            <button style={{backgroundColor:this.props.backgroundColors[0]}} ></button>
          </div>
          <div className="target-panel-row-button">
            <button style={{backgroundColor:this.props.backgroundColors[1]}} ></button>
          </div>
          <div className="target-panel-row-button">
            <button style={{backgroundColor:this.props.backgroundColors[2]}} ></button>
          </div>
          <div className="target-panel-row-button">
            <button style={{backgroundColor:this.props.backgroundColors[3]}} ></button>
          </div>
        </div>
      </div>
    );
  }
}
