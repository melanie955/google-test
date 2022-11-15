import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import GoogleSelectors from "../../selectors/google-selectors/google-selectors";

Given('I navigate to Google', () => {
    // Navigates to google
    cy.visit('www.google.co.uk');

    // Accepts cookies
    cy.get(GoogleSelectors.AcceptCookiesButton).click();
});

When(`I search for {string}`, (searchTerm) => {
    // Types dogs into search bar
    cy.get(GoogleSelectors.SearchBar).type(searchTerm);

    // Clicks search button
    cy.get(GoogleSelectors.SearchButton).click();
});

Then('I expect to see results for {string}', (term) => {
    // Gets the results
    var results = Cypress.$(GoogleSelectors.ResultsClass);

    // Checks that each result contains the text dog
    for(let i = 0; i < results.length; i++){
        const regEx = new RegExp(`${term}` + `?`, "ig");
        expect(results[i].textContent).to.match(regEx);
    };
});