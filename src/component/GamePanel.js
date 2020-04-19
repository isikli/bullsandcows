import GameButton from "./GameButton";
import React from "react";
import PropTypes from "prop-types";

import "./GamePanel.css";

export default class GamePanel extends React.Component {
  static propTypes = {
    backgroundColors:PropTypes.array
  };


  render() {
    return (
      <div className="game-gamebutton-panel">
        <div className="game-gamebutton-panel-row">
          <GameButton x="0" y="0" backgroundColor= {this.props.backgroundColors[0][0]}/>
          <GameButton x="0" y="1" backgroundColor= {this.props.backgroundColors[0][1]}/>
          <GameButton x="0" y="2" backgroundColor= {this.props.backgroundColors[0][2]}/>
          <GameButton x="0" y="3" backgroundColor= {this.props.backgroundColors[0][3]}/>
        </div>
        <div className="game-gamebutton-panel-row">
          <GameButton x="1" y="0" backgroundColor= {this.props.backgroundColors[1][0]}/>
          <GameButton x="1" y="1" backgroundColor= {this.props.backgroundColors[1][1]}/>
          <GameButton x="1" y="2" backgroundColor= {this.props.backgroundColors[1][2]}/>
          <GameButton x="1" y="3" backgroundColor= {this.props.backgroundColors[1][3]}/>
        </div>
        <div className="game-gamebutton-panel-row">
          <GameButton x="2" y="0" backgroundColor= {this.props.backgroundColors[2][0]}/>
          <GameButton x="2" y="1" backgroundColor= {this.props.backgroundColors[2][1]}/>
          <GameButton x="2" y="2" backgroundColor= {this.props.backgroundColors[2][2]}/>
          <GameButton x="2" y="3" backgroundColor= {this.props.backgroundColors[2][3]}/>
        </div>
        <div className="game-gamebutton-panel-row">
          <GameButton x="3" y="0" backgroundColor= {this.props.backgroundColors[3][0]}/>
          <GameButton x="3" y="1" backgroundColor= {this.props.backgroundColors[3][1]}/>
          <GameButton x="3" y="2" backgroundColor= {this.props.backgroundColors[3][2]}/>
          <GameButton x="3" y="3" backgroundColor= {this.props.backgroundColors[3][3]}/>
        </div>
        <div className="game-gamebutton-panel-row">
          <GameButton x="4" y="0" backgroundColor= {this.props.backgroundColors[4][0]}/>
          <GameButton x="4" y="1" backgroundColor= {this.props.backgroundColors[4][1]}/>
          <GameButton x="4" y="2" backgroundColor= {this.props.backgroundColors[4][2]}/>
          <GameButton x="4" y="3" backgroundColor= {this.props.backgroundColors[4][3]}/>
        </div>
        <div className="game-gamebutton-panel-row">
          <GameButton x="4" y="0" backgroundColor= {this.props.backgroundColors[5][0]}/>
          <GameButton x="4" y="1" backgroundColor= {this.props.backgroundColors[5][1]}/>
          <GameButton x="4" y="2" backgroundColor= {this.props.backgroundColors[5][2]}/>
          <GameButton x="4" y="3" backgroundColor= {this.props.backgroundColors[5][3]}/>
        </div>
      </div>
    );
  }
}
