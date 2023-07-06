# Qubika

## Cypress Tests - README

This repository contains Cypress tests for the December Labs website. The tests are designed to verify the functionality and behavior of the website across different scenarios.

### Getting Started

To run the Cypress tests, please follow the steps below:

#### Prerequisites

- Node.js (v12 or higher)

#### Installation

1. Clone the repository:

git clone https://github.com/jmanuelpat/qubika_cypress.git

2. Navigate to the project directory:

cd qubika_cypress

3. Install the dependencies:

npm install

#### Running the Tests

To run the tests, use one of the following commands:

- Run tests using the Cypress Test Runner (interactive mode):

    1. Run the following command: ./node_modules/.bin/cypress open

    2. Select "E2E Testing"

    3. Select Chrome

    4. Press "Start E2E Testing in Chrome"

    5. Click on "decemberlabs.cy.js". Then the script starts.


### Possible Improvements

1. **Test Coverage**: Consider expanding the test suite to cover additional features and scenarios of the website.

2. **Parallel Execution**: Implement parallel test execution to improve the test suite's performance and reduce the overall test execution time.

3. **Test Reporting**: Integrate test reporting tools or frameworks to generate comprehensive test reports with detailed test results.
