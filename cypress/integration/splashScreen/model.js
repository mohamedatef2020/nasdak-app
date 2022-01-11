/* eslint-disable no-undef */

const pageModel = {
    selectors: {
        firstOnboardingScreen: ":nth-child(2) > .r-flexDirection-18u37iz > .r-alignItems-1awozwy > .r-flex-1ap4h1l > .r-fontSize-zz5t5d",
        arrowIcon: "[data-testid='iconIcon']",
        loadingScreen: ".css-text-901oao",
    },

    actions: {
        scrollRight: () => cy.window().scrollTo("right"),
        clickArrowIcon: () => cy.get(pageModel.selectors.arrowIcon).click(),
    },

    assertions: {
        assertFirstOnboardingScreenIsDisplayed: () =>
            cy.get(pageModel.selectors.firstOnboardingScreen).should("be.visible"),
        assertCorrectFirstOnboardingScreenDesign: () =>
            cy.percySnapshot("1st onboarding Screen", { widths: [375], minHeight: 812 }),
        assertLoadingScreenIsDisplayed: () => cy.get(pageModel.selectors.loadingScreen).should("be.visible"),
        assertCorrectExploreScreenDesign: () =>
            cy.percySnapshot("Explore Screen", { widths: [375], minHeight: 812 }),
    },
};

module.exports = {
    pageModel,
}