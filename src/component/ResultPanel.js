import React from "react";
import PropTypes from "prop-types";

import "./ResultPanel.css";

export default class ResultPanel extends React.Component {
  static propTypes = {
    styles:PropTypes.array
  };


  render() {
    return (
      <div className="result-panel">
        <div className="result-panel-row">
          <button disabled className = "result-panel-box" x="0" y="0" style= {{backgroundColor:this.props.styles[0][0]}}/>
          <button disabled className = "result-panel-box" x="0" y="1" style= {{backgroundColor:this.props.styles[0][1]}}/>
          <button disabled className = "result-panel-box" x="0" y="2" style= {{backgroundColor:this.props.styles[0][2]}}/>
          <button disabled className = "result-panel-box" x="0" y="3" style= {{backgroundColor:this.props.styles[0][3]}}/>
        </div>
        <div className="result-panel-row">
          <button disabled className = "result-panel-box" x="1" y="0" style= {{backgroundColor:this.props.styles[1][0]}}/>
          <button disabled className = "result-panel-box" x="1" y="1" style= {{backgroundColor:this.props.styles[1][1]}}/>
          <button disabled className = "result-panel-box" x="1" y="2" style= {{backgroundColor:this.props.styles[1][2]}}/>
          <button disabled className = "result-panel-box" x="1" y="3" style= {{backgroundColor:this.props.styles[1][3]}}/>
        </div>
        <div className="result-panel-row">
          <button disabled className = "result-panel-box" x="2" y="0" style= {{backgroundColor:this.props.styles[2][0]}}/>
          <button disabled className = "result-panel-box" x="2" y="1" style= {{backgroundColor:this.props.styles[2][1]}}/>
          <button disabled className = "result-panel-box" x="2" y="2" style= {{backgroundColor:this.props.styles[2][2]}}/>
          <button disabled className = "result-panel-box" x="2" y="3" style= {{backgroundColor:this.props.styles[2][3]}}/>
        </div>
        <div className="result-panel-row">
          <button disabled className = "result-panel-box" x="3" y="0" style= {{backgroundColor:this.props.styles[3][0]}}/>
          <button disabled className = "result-panel-box" x="3" y="1" style= {{backgroundColor:this.props.styles[3][1]}}/>
          <button disabled className = "result-panel-box" x="3" y="2" style= {{backgroundColor:this.props.styles[3][2]}}/>
          <button disabled className = "result-panel-box" x="3" y="3" style= {{backgroundColor:this.props.styles[3][3]}}/>
        </div>
        <div className="result-panel-row">
          <button disabled className = "result-panel-box" x="4" y="0" style= {{backgroundColor:this.props.styles[4][0]}}/>
          <button disabled className = "result-panel-box" x="4" y="1" style= {{backgroundColor:this.props.styles[4][1]}}/>
          <button disabled className = "result-panel-box" x="4" y="2" style= {{backgroundColor:this.props.styles[4][2]}}/>
          <button disabled className = "result-panel-box" x="4" y="3" style= {{backgroundColor:this.props.styles[4][3]}}/>
        </div>
        <div className="result-panel-row">
          <button disabled className = "result-panel-box" x="4" y="0" style= {{backgroundColor:this.props.styles[5][0]}}/>
          <button disabled className = "result-panel-box" x="4" y="1" style= {{backgroundColor:this.props.styles[5][1]}}/>
          <button disabled className = "result-panel-box" x="4" y="2" style= {{backgroundColor:this.props.styles[5][2]}}/>
          <button disabled className = "result-panel-box" x="4" y="3" style= {{backgroundColor:this.props.styles[5][3]}}/>
        </div>
      </div>
    );
  }
}
