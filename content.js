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

    // Function to add the 'View Source' button
    function addViewSourceButton(subPropElement) {
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
    }

    // Function to print out the JSON-style data
    function printJSONStyleData() {
        // Get the page title
        const pageTitle = document.title;

        // Extract the username from the page title
        const usernameMatch = pageTitle.match(/All submissions by (.+) - DMOJ: Modern Online Judge/);
        const username = usernameMatch ? usernameMatch[1] : null;

        // Get all elements with the class 'sub-prop'
        const subPropElements = document.querySelectorAll('.sub-prop');

        // Define an array to store the submission information
        const submissions = [];

        // Define a mapping of problem names to their respective question codes
        const problemToQuestionCode = {
            'CCC \'09 S1 - Cool Numbers': 'ccc09s1',
            'PEG Test \'14 - Water': 'avatarwater',
            'CCC \'15 J2 - Happy or Sad': 'ccc15j2'
        };

        // Iterate over each sub-prop element
        subPropElements.forEach((subPropElement) => {
            // Find the 'View Source' link in the current sub-prop element
            const viewSourceLink = subPropElement.querySelector('a.label[href^="https://dmoj.ca/src/"]');

            // Check if a 'View Source' link was found
            if (viewSourceLink) {
                // Extract the submission code from the 'View Source' link URL
                const urlParts = viewSourceLink.href.split('/');
                const submissionCode = urlParts[urlParts.length - 1];

                // Find the problem name for this submission
                const problemNameElement = subPropElement.closest('.submission-row').querySelector('.name a');
                const problemName = problemNameElement.textContent.trim();

                // Find the corresponding question code using the mapping
                const questionCode = problemToQuestionCode[problemName];

                // If a corresponding question code exists, add the submission information to the array
                if (questionCode) {
                    submissions.push({
                        problem: problemName,
                        questionCode: questionCode,
                        submissionCode: submissionCode,
                        username: username // Add the username from the page title
                    });
                }
            }
        });

        // Convert the array to a JSON string and log it
        const submissionsJSON = JSON.stringify(submissions, null, 2);
        console.log(submissionsJSON);
    }

    // Call the functions
    const subPropElements = document.querySelectorAll('.sub-prop');
    subPropElements.forEach(addViewSourceButton);
    printJSONStyleData();
})();
