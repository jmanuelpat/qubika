class AustinOfficePage {
  constructor(austinOfficeLocator, titleText, consultationButtonLocator, popupLocator, closePopupLocator) {
    //this.austinOfficeLocator = austinOfficeLocator;
    this.titleText = titleText;
    this.consultationButtonLocator = consultationButtonLocator;
    this.popupLocator = popupLocator;
    this.closePopupLocator = closePopupLocator;
  }

  // navigateToAustinOffice() {
  //   return cy.get(this.austinOfficeLocator)
  //     .find('a[href*="/locations/austin"]')
  //     .click();
  // }

  validateUrl() {
    return cy.url().should('include', '/locations/austin/');
  }

  // validateTitle() {
  //   return cy.get('h1').contains(this.titleText).should('be.visible');
  // }

  validateTitle() {
    return cy.title().should('exist');
  }

  scheduleConsultation() {
    return cy.get(this.consultationButtonLocator).contains('Schedule free consultation').click();
  }

  validatePopupVisible() {
    return cy.get(this.popupLocator).should('be.visible');
  }

  closePopup() {
    return cy.get(this.closePopupLocator).click();
  }

  validatePopupNotVisible() {
    return cy.get(this.popupLocator).should('not.be.visible');
  }
}

export default AustinOfficePage;
