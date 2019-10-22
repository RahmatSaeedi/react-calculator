import React, {Component} from 'react';
import Button from './Components/Button/Button'
import './Calculator.css';
import _n from'./Components/Numerals/Numerals';


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue:  {
        displayValue: _n.symbol.zero,
        isFloat: false,
        isNegative: false
      },
      previousResult: {
        displayValue: _n.symbol.zero,
        isFloat: false,
        isNegative: false
      },
      isReset: true,
    };
  }

  reset = () => {
    this.setState({
      currentValue:  {
        displayValue: _n.symbol.zero,
        isFloat: false,
        isNegative: false
      },
      previousResult: {
        displayValue: _n.symbol.zero,
        isFloat: false,
        isNegative: false
      },
      isReset: true,
    });
  }

  

  display = (symbol) => {
    let {currentValue, isReset} = this.state;

    if(isReset && symbol !== _n.symbol.zero) {
      currentValue.displayValue = symbol;
      this.setState({
        currentValue,
        isReset: false
      })
    } else if(!isReset){
      currentValue.displayValue = currentValue.displayValue + symbol;
      this.setState({
        currentValue
      })
    }
  }
  
  decimalPoint = (symbol) => {
    let {currentValue, isReset} = this.state;

    if(isReset) {
      currentValue.displayValue = _n.symbol.zero + _n.symbol.decimalPoint;
      currentValue.isFloat = true;
      this.setState({
        currentValue,
        isReset: false
      })
    } else if(!currentValue.isFloat) {
      currentValue.displayValue = currentValue.displayValue + _n.symbol.decimalPoint;
      currentValue.isFloat = true;
      this.setState({
        currentValue
      })
    }
  }


  calculate = (symbol) => {
    
  }

  

  addWholeNumbers = (n1, n2) => {
    let len = Math.max(n1.length, n2.length);
    let len_difference = len - Math.min(n1.length, n2.length);

    let smaller = n1.length < n2.length ? n1 : n2;
    let bigger = n1.length > n2.length ? n1 : n2;
    let r = new Array (len + 1).fill(null, 0 , len + 1)

    for (let i = 0; i < smaller.length; i ++) {
      r[len - i - 1] = r[len - i - 1] + smaller[len - len_difference - i - 1].charCodeAt(0) + bigger[len - i - 1].charCodeAt(0) - _n.symbol.zero.charCodeAt(0);
      if(r[len - i - 1] > _n.symbol.nine.charCodeAt(0)) {
        r[len - i - 1] = r[len - i - 1] - 10;
        r[len - i - 2] = 1; // carry
      }
      r[len - i - 1] = String.fromCharCode(r[len - i - 1]);
    }
    for (let i = smaller.length; i < bigger.length; i ++) {
      r[len - i - 1] = r[len - i - 1] + bigger[len - i - 1].charCodeAt(0);
      if(r[len - i - 1] > _n.symbol.nine.charCodeAt(0)) {
        r[len - i - 1] = r[len - i - 1] - 10;
        r[len - i - 2] = 1; // carry
      }
      r[len - i - 1] = String.fromCharCode(r[len - i - 1]);
    }

    r[0] = String.prototype.charAt(r[0] + _n.symbol.zero.charCodeAt(0));
    
    return r.join('');
  }

  subtractWholeNumbers = (n1, n2) => {
    let len = Math.max(n1.length, n2.length);
    let len_difference = len - Math.min(n1.length, n2.length);
    let r = new Array (len + 1).fill(null, 0 , len + 1)

    
    if(n1.length !== len) {
      n1 = new Array (len_difference).fill(_n.symbol.zero, 0 , len_difference).join('') + n1;
    } else if(n2.length !== len){
      n2 = new Array (len_difference).fill(_n.symbol.zero, 0 , len_difference).join('') + n2;
    }

    
    return r.join('');
  }

  add = (symbol) => {
    let {currentValue, previousResult} = this.state;

    console.log(this.addWholeNumbers(currentValue.displayValue, previousResult.displayValue))


    if(currentValue.isNegative && previousResult.isNegative) {
      let indexOfDecimalPointCurrent = currentValue.displayValue.indexOf(_n.symbol.decimalPoint);
      let indexOfDecimalPointPrevious = previousResult.displayValue.indexOf(_n.symbol.decimalPoint);


    } else if(!currentValue.isNegative && !previousResult.isNegative) {

    } else {

    }
  }

  subtract = (symbol) => {
  }

  divide = (symbol) => {
  }

  multiply = (symbol) => {
  }

  changeSign = (symbol) => {
    let {currentValue} = this.state;

    if(currentValue.isNegative) {
      currentValue.isNegative = false;
      currentValue.displayValue = currentValue.displayValue.substr(1, currentValue.displayValue.length - 1);
      this.setState({
        currentValue
      });
    } else if(currentValue.displayValue[0] !== _n.symbol.zero ||  currentValue.displayValue.length !== 1){
      currentValue.displayValue = '-' + currentValue.displayValue;
      currentValue.isNegative = true;

      this.setState({
        currentValue
      });
    }
  }

  render() {
    const buttons = [
      {symbol: 'C',             cols: '3', action: this.reset},
      {symbol: '/',             cols: '1', action: this.divide},
      {symbol: _n.symbol.seven, cols: '1', action: this.display},
      {symbol: _n.symbol.eight, cols: '1', action: this.display},
      {symbol: _n.symbol.nine,  cols: '1', action: this.display},
      {symbol: '×',             cols: '1', action: this.multiply},
      {symbol: _n.symbol.four,  cols: '1', action: this.display},
      {symbol: _n.symbol.five,  cols: '1', action: this.display},
      {symbol: _n.symbol.six,   cols: '1', action: this.display},
      {symbol: '-',             cols: '1', action: this.subtract},
      {symbol: _n.symbol.one,   cols: '1', action: this.display},
      {symbol: _n.symbol.two,   cols: '1', action: this.display},
      {symbol: _n.symbol.three, cols: '1', action: this.display},
      {symbol: '+',             cols: '1', action: this.add},
      {symbol: '±',             cols: '1', action: this.changeSign},
      {symbol: _n.symbol.zero,  cols: '1', action: this.display},
      {symbol: _n.symbol.decimalPoint, cols: '1', action: this.decimalPoint},
      {symbol: '=',             cols: '1', action: this.calculate}
    ];

    return (
      <div className="calculator">
        <input type="text" className="result" value={this.state.currentValue.displayValue} readOnly/>
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
