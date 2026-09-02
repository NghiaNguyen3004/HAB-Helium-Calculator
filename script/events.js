import { state, updateState } from './state.js';
import { render } from './render.js';
import {
    calculateRequiredHelium,
    calcAvgBurstAlt,
    calcAvgAscentRate,
    calcAscentTime
} from "./calculation.js";

export function initEvents(){
    document.getElementById('calculate-button').addEventListener('click', handleCalculate);
}

function handleCalculate() {
    const balloonSizeInput = getValidatedballoonSize();
    const payloadWeightsInput = getValidatedPayloadWeights();
    const positiveLiftInput = getValidatedPositiveLift();

     // TODO: decide — does an invalid field just block calculation,
    // or do volume/diameter derive from each other (per earlier discussion)?
    if (balloonSizeInput === null || payloadWeightsInput === null || positiveLiftInput === null) {
        render(); // still render so error messages show
        return;
    }
    
    // TODO: call your calculations.js functions and build the result object
    
    updateState({
        result: {
        // TODO: add in the calculated values here
        },
    });
    
    render();
}


function getValidatedballoonSize() {
  const raw = document.getElementById('balloon-size').value;
  const value = parseFloat(raw);
 
  // TODO: fill in real validation rules (empty check, NaN check, range check)
  // On failure: updateState({ errors: { volume: 'some message' } }); return null;
  // On success: updateState({ errors: { volume: null } });
 
  return value;
}

function getValidatedPayloadWeights() {
  const raw = document.getElementById('payload-weights').value;
  const value = parseFloat(raw);
 
  // TODO: fill in real validation rules (empty check, NaN check, range check)
  // On failure: updateState({ errors: { volume: 'some message' } }); return null;
  // On success: updateState({ errors: { volume: null } });
 
  return value;
}

function getValidatedPositiveLift() {
  const raw = document.getElementById('positive-lift').value;
  const value = parseFloat(raw);
 
  // TODO: fill in real validation rules (empty check, NaN check, range check)
  // On failure: updateState({ errors: { volume: 'some message' } }); return null;
  // On success: updateState({ errors: { volume: null } });
 
  return value;
}