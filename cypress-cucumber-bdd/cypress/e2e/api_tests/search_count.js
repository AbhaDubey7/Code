

/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = "https://www.woolworths.com.au/apis/ui/v2/Search/count";
let response;

Given('I have the search endpoint', () => {
  cy.wrap(baseUrl).as('searchEndpoint');
});

When('I search for the term {string}', (term) => {
  cy.get('@searchEndpoint').then((url) => {
    cy.request({
      method: 'GET',
      url: `${url}?searchTerm=${term}`,
      failOnStatusCode: false
    }).then((res) => {
      response = res;
      cy.wrap(response).as('response');
    });
  });
});

When('I search with an empty term', () => {
  cy.get('@searchEndpoint').then((url) => {
    cy.request({
      method: 'GET',
      url: `${url}?searchTerm=`,
      failOnStatusCode: false
    }).then((res) => {
      response = res;
      cy.wrap(response).as('response');
    });
  });
});

Then('the response status code should be {int}', (statusCode) => {
  cy.get('@response').its('status').should('eq', statusCode);
});

Then('the response should contain {string} in {string}', (property, parent) => {
  cy.get('@response').then((res) => {
    expect(res.body[parent]).to.have.property(property);
  });
});

Then('ArticleCount should be {int} in {string}', (count, parent) => {
  cy.get('@response').then((res) => {
    expect(res.body[parent].ArticleCount).to.eq(count);
  });
});

Then('I log the response details', () => {
  cy.get('@response').then((res) => {
    cy.log(`Response: ${JSON.stringify(res.body)}`);
    console.log(res.body); // Log the response to the console
  });
});

