import {state}  from './state.js';

export function render() {
    renderResults();
    renderError('balloon_size', 'size_error');
    renderError('payload_weights', 'weight_error');
    renderError('positive_lift', 'lift_error');
}

function renderResults() {
    const RESULT_DISPLAY = [
        { resultKey: 'required_helium', elementId: 'helium_result', unit: 'cubic feet' },
        { resultKey: 'avg_burst_alt', elementId: 'burst_result', unit: 'meters' },
        { resultKey: 'avg_ascent_rate', elementId: 'ascent_result', unit: 'm/s' },
        { resultKey: 'ascent_time', elementId: 'time_result', unit: 'minutes' }
    ]

    RESULT_DISPLAY.forEach(({ resultKey, elementId, unit }) => {
        const resultValue = state.result[resultKey];
        const resultEl = document.getElementById(elementId);
        resultEl.textContent = resultValue !== null ? `${resultValue} ${unit}` : '';
    });
}

function renderError(fieldName, inputId) {
    const message = state.errors[fieldName];
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(inputId + 'Error');

    if (message) {
        input.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
    } else {
        input.removeAttribute('aria-invalid');
        errorEl.textContent = '';
    }
}