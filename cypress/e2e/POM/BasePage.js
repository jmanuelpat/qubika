class BasePage {
  constructor(logoLocator, mainMenuLocator, austinOfficeLocator) {
    this.logoLocator = logoLocator;
    this.mainMenuLocator = mainMenuLocator;
    this.austinOfficeLocator = austinOfficeLocator;
  }

  visit() {
    cy.visit('https://inhouse.decemberlabs.com/');
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  }

  validateTitle() {
    return cy.title().should('exist');
  }

  validateLogo() {
    return cy.get(this.logoLocator).should('be.visible');
  }

  validateMainMenu() {
    return cy.get(this.mainMenuLocator).should('be.visible');
  }

  navigateToAustinOffice() {
    return cy.get(this.austinOfficeLocator)
      .find('a[href*="/locations/austin"]')
      .click();
  }

}
  
  export default BasePage;