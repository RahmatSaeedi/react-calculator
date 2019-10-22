import React, {Component} from 'react';
import Button from './Components/Button/Button'
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDisplay: '0',
      previous: [],
      nextIsReset : false

    };
  }

  reset = () => {
    this.setState({
      currentDisplay: '0',
      previous: [],
      nextIsReset : false
    });
  }


  addToCurrent = (symbol) => {
    if(['/','*', '-', '+'].indexOf(symbol) > -1 ) {
      let {previous} = this.state;
      previous.push(this.state.currentDisplay);

      previous = [eval(previous.join('')), symbol];
      this.setState({
        previous,
        currentDisplay: '0',
        nextIsReset: false
      });
    } else {
      if((this.state.currentDisplay === '0' && symbol !== '.') || this.state.nextIsReset) {
        this.setState({
          currentDisplay: symbol,
          nextIsReset: false
        });
      } else {
        this.setState({
          currentDisplay: this.state.currentDisplay + symbol
        });
      }
    }
  }

  

  calculate = (symbol) => {
    let {currentDisplay, previous} = this.state;
    if(previous.length > 0) {
      currentDisplay = eval(String(previous.join('') + currentDisplay));
      this.setState({
        currentDisplay,
        previous: [],
        nextIsReset: true
      })
    }
  }


  render() {
    const buttons = [
      {symbol: 'C', cols: '3', action: this.reset},
      {symbol: '/', cols: '1', action: this.addToCurrent},
      {symbol: '7', cols: '1', action: this.addToCurrent},
      {symbol: '8', cols: '1', action: this.addToCurrent},
      {symbol: '9', cols: '1', action: this.addToCurrent},
      {symbol: '*', cols: '1', action: this.addToCurrent},
      {symbol: '4', cols: '1', action: this.addToCurrent},
      {symbol: '5', cols: '1', action: this.addToCurrent},
      {symbol: '6', cols: '1', action: this.addToCurrent},
      {symbol: '-', cols: '1', action: this.addToCurrent},
      {symbol: '1', cols: '1', action: this.addToCurrent},
      {symbol: '2', cols: '1', action: this.addToCurrent},
      {symbol: '3', cols: '1', action: this.addToCurrent},
      {symbol: '+', cols: '1', action: this.addToCurrent},
      {symbol: '0', cols: '2', action: this.addToCurrent},
      {symbol: '.', cols: '1', action: this.addToCurrent},
      {symbol: '=', cols: '1', action: this.calculate}
    ];

    return (
      <div className="calculator">
        {this.state.previous.length > 0 ? 
          <div className="previous">{this.state.previous.join('')}</div>
        : null}
        <input type="text" className="result" value={this.state.currentDisplay} readOnly/>
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
