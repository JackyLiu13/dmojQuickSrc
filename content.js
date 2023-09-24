// ==UserScript==
// @name         Add 'View Source' Button
// @namespace    http://your-namespace.example.com
// @version      1.0
// @description  Add 'View Source' button under 'view' button on DMOJ submissions page
// @author       Jacky
// @match        https://dmoj.ca/submissions/user/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get all elements with the class 'sub-prop'
    const subPropElements = document.querySelectorAll('.sub-prop');

    // Iterate over each sub-prop element
    subPropElements.forEach((subPropElement) => {
        // Find the 'view' button in the current sub-prop element
        const viewButton = subPropElement.querySelector('a .fa-eye');

        // Check if a 'view' button was found
        if (viewButton) {
            // Create a new 'View Source' button element
            const viewSourceButton = document.createElement('a');
            viewSourceButton.href = viewButton.parentElement.href.replace('/submission/', '/src/');
            viewSourceButton.innerText = 'View Source';
            viewSourceButton.className = 'label';

            // Add the 'View Source' button after the 'view' button
            subPropElement.appendChild(viewSourceButton);
        }
    });
})();
