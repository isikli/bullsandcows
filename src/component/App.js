import React from "react";
import ButtonPanel from "./ButtonPanel";
import GamePanel from "./GamePanel";
import ResultPanel from "./ResultPanel";
import CalculateButton from "./CalculateButton";
import ResetButton from "./ResetButton";
import BackButton from "./BackButton";
import TargetPanel from "./TargetPanel";
import update from "../logic/update";
import { goback, disablegoback } from "../logic/goback";

import init from "../logic/init";
import calculate from "../logic/calculate";
import newgame from "../logic/newgame";

import "./App.css";

export default class App extends React.Component {
  state = newgame ();

  handleClick = (x,y) => {
    this.setState(update(this.state, x, y));
  };

  handleResult = () => {
    this.setState(calculate(this.state));
  };

  handleReset = () => {
    this.setState(newgame(this.state));
  };

  handleGoBack = () => {
    this.setState(goback(this.state));
  };

  render() {
    return (
      <div className="component-app">
        <div className="target-panel-cont">
          <TargetPanel backgroundColors= {this.state.displayTarget}/>
        </div>
        <div className="game-panel">
          <div className = "col1">
            <GamePanel   backgroundColors= {this.state.colors}  />
            <ButtonPanel clickHandler={this.handleClick} />
            </div>
          <div className = "col2">
            <ResultPanel  styles= {this.state.result}  />
          </div>
        </div>

        <div className="buttons">
          <CalculateButton  disable={this.state.disable} clickHandler={this.handleResult} />
          <ResetButton   clickHandler={this.handleReset} />
          <BackButton   disable={disablegoback (this.state)} clickHandler={this.handleGoBack} />
        </div>
      </div>
    );
  }
}
