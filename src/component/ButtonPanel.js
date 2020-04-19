import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (x,y) => {
    this.props.clickHandler(x,y);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div className="component-button-panel-row">
          <Button x="0" y="0" clickHandler={this.handleClick} />
          <Button x="0" y="1" clickHandler={this.handleClick} />
          <Button x="0" y="2" clickHandler={this.handleClick} />
          <Button x="0" y="3" clickHandler={this.handleClick}  />
        </div>
        <div className="component-button-panel-row">
          <Button x="1" y="0" clickHandler={this.handleClick} />
          <Button x="1" y="1" clickHandler={this.handleClick} />
          <Button x="1" y="2" clickHandler={this.handleClick} />
          <Button x="1" y="3" clickHandler={this.handleClick}  />
        </div>
        <div className="component-button-panel-row">
          <Button x="2" y="0" clickHandler={this.handleClick} />
          <Button x="2" y="1" clickHandler={this.handleClick} />
          <Button x="2" y="2" clickHandler={this.handleClick} />
          <Button x="2" y="3" clickHandler={this.handleClick}  />
        </div>
        <div className="component-button-panel-row">
          <Button x="3" y="0" clickHandler={this.handleClick} />
          <Button x="3" y="1" clickHandler={this.handleClick} />
          <Button x="3" y="2" clickHandler={this.handleClick} />
          <Button x="3" y="3" clickHandler={this.handleClick} />
        </div>
        <div className="component-button-panel-row">
          <Button x="4" y="0" clickHandler={this.handleClick} />
          <Button x="4" y="1" clickHandler={this.handleClick} />
          <Button x="4" y="2" clickHandler={this.handleClick}  />
          <Button x="4" y="3" clickHandler={this.handleClick}  />
        </div>
      </div>
    );
  }
}
