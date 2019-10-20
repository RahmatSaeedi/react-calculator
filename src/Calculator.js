import React, {Component} from 'react';
import Button from './Components/Button/Button'
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '٠',
      previous: []
    };
  }

  reset = () => {
    this.setState({
      current: '٠'
    });
  }


  addToCurrent = (val) => {
    
    this.setState({
      current: this.state.current + val
    });
  }

  render() {
    const buttons = [
      {symbol: 'C', cols: '3', action: this.reset},
      {symbol: '/', cols: '1', action: this.addToCurrent},
      {symbol: '٧', cols: '1', action: this.addToCurrent},
      {symbol: '٨', cols: '1', action: this.addToCurrent},
      {symbol: '٩', cols: '1', action: this.addToCurrent},
      {symbol: '×', cols: '1', action: this.addToCurrent},
      {symbol: '٤', cols: '1', action: this.addToCurrent},
      {symbol: '٥', cols: '1', action: this.addToCurrent},
      {symbol: '٦', cols: '1', action: this.addToCurrent},
      {symbol: '-', cols: '1', action: this.addToCurrent},
      {symbol: '١', cols: '1', action: this.addToCurrent},
      {symbol: '٢', cols: '1', action: this.addToCurrent},
      {symbol: '٣', cols: '1', action: this.addToCurrent},
      {symbol: '+', cols: '1', action: this.addToCurrent},
      {symbol: '±', cols: '1', action: this.addToCurrent},
      {symbol: '٠', cols: '1', action: this.addToCurrent},
      {symbol: '٫', cols: '1', action: this.addToCurrent},
      {symbol: '=', cols: '1', action: this.addToCurrent}
    ];

    return (
      <div className="calculator">
        {this.state.previous.length > 0 ? 
          <div className="previous">{this.state.previous[this.state.previous.length -1 ]}</div>
        : null}
        <input type="text" className="result" value={this.state.current} />
        {
          buttons.map((btn, i) => {
            return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} />
          })
        }
      </div>
    );
  }
}

export default Calculator;
