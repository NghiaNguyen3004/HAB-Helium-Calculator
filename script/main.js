import { initEvents } from './events.js';
import { render } from './render.js';
 
document.addEventListener('DOMContentLoaded', () => {
    initEvents(); // wire up all event listeners
    render();     // paint initial state (placeholders, cleared errors)
});