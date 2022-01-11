/// <reference types="cypress" />

const { pageModel } = require("../splashScreen/model");

describe('Test Splash Screen', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.polygon.io/v3/reference/tickers?market=stocks&limit=20").as("loadStocks");

    cy.visit('/');
  })

  it('[TC1.1] Should display the first onboarding screen', () => {
    pageModel.assertions.assertFirstOnboardingScreenIsDisplayed();
  });

  it('[TC1.2] Should display the first onboarding screen as in design', () => {
    pageModel.assertions.assertCorrectFirstOnboardingScreenDesign();
  });

  it('[TC1.2] Should display loading screen', () => {
    pageModel.actions.scrollRight();
    pageModel.actions.clickArrowIcon();

    pageModel.assertions.assertLoadingScreenIsDisplayed();
  });

  it('[TC2.1] Should Display the list of stocks correctly', () => {
    pageModel.actions.scrollRight();
    pageModel.actions.clickArrowIcon();
    
    cy.wait(2000);
    cy.wait("@loadStocks");
    pageModel.assertions.assertCorrectExploreScreenDesign();
  });
})
