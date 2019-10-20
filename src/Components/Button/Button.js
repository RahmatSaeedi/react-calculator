import React, {Component} from 'react';
import './css/style.css';
class Button extends Component {

  render() {
    return (
      <div className={`col-${this.props.cols}`}>
        <button className="calc-btn" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
      </div>
    );
  }
}

export default Button;