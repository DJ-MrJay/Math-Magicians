import React from 'react';
import './style.css';

class Calculator extends React.Component {
	render() 
	{
		return (
			<div className="container">
				<div className="calculator">
					<input type="text" className="calc-display" value="0" />
					<div className="calculator-buttons">
						<button className="btn is-clear operator">AC</button>
						<button className="btn is-clear operator">+/-</button>
						<button className="btn is-clear operator">%</button>
						<button className="btn orange operator">&divide;</button>
						<button className="btn">7</button>
						<button className="btn">8</button>
						<button className="btn">9</button>
						<button className="btn orange operator">x</button>
						<button className="btn">4</button>
						<button className="btn">5</button>
						<button className="btn">6</button>
						<button className="btn orange operator">-</button>
						<button className="btn">1</button>
						<button className="btn">2</button>
						<button className="btn">3</button>
						<button className="btn orange operator">+</button>
						<button className="btn span-2">0</button>
						<button className="btn">.</button>
						<button className="btn orange operator">=</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;