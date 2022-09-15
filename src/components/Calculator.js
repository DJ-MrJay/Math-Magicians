import React, { useState, useEffect } from 'react';
import Display from './Display';
import './style.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const { total, next } = result;
    if (!next && !total) setDisplay('0');
    else setDisplay(next ?? total);
  }, [result]);

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    setResult((prevState) => ({ ...calculate(prevState, buttonName) }));
  };

  return (
    <div className="container">
      <div className="calculator">
        <Display>{display}</Display>
        <div className="calculator-buttons">
          <button type="button" className="btn is-clear operation" onClick={handleClick}>AC</button>
          <button type="button" className="btn is-clear operation" onClick={handleClick}>+/-</button>
          <button type="button" className="btn is-clear operation" onClick={handleClick}>%</button>
          <button type="button" className="btn orange operation" onClick={handleClick}>÷</button>
          <button type="button" className="btn" onClick={handleClick}>7</button>
          <button type="button" className="btn" onClick={handleClick}>8</button>
          <button type="button" className="btn" onClick={handleClick}>9</button>
          <button type="button" className="btn orange operation" onClick={handleClick}>x</button>
          <button type="button" className="btn" onClick={handleClick}>4</button>
          <button type="button" className="btn" onClick={handleClick}>5</button>
          <button type="button" className="btn" onClick={handleClick}>6</button>
          <button type="button" className="btn orange operation" onClick={handleClick}>-</button>
          <button type="button" className="btn" onClick={handleClick}>1</button>
          <button type="button" className="btn" onClick={handleClick}>2</button>
          <button type="button" className="btn" onClick={handleClick}>3</button>
          <button type="button" className="btn orange operation" onClick={handleClick}>+</button>
          <button type="button" className="btn span-2" onClick={handleClick}>0</button>
          <button type="button" className="btn" onClick={handleClick}>.</button>
          <button type="button" className="btn orange operation" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
