import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { applyNumber, changeOperation, clearDisplay } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

const handleClick =(event) => {
  console.log(event);
  dispatch(applyNumber(Number(event.target.textContent)))
};

const handleOperationChg =(event) => {
  console.log(event.target.textContent);
  dispatch(changeOperation(event.target.textContent))
};

const handleClear = () => {
  dispatch(clearDisplay())
}
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleClick} />
              <CalcButton value={2} onClick={handleClick}/>
              <CalcButton value={3} onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleClick}/>
              <CalcButton value={5} onClick={handleClick}/>
              <CalcButton value={6} onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleClick}/>
              <CalcButton value={8} onClick={handleClick}/>
              <CalcButton value={9} onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperationChg}/>
              <CalcButton value={"*"} onClick={handleOperationChg}/>
              <CalcButton value={"-"} onClick={handleOperationChg}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
