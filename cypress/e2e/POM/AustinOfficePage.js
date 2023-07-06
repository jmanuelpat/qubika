class AustinOfficePage {
  constructor(austinOfficeLocator, titleText, consultationButtonLocator, popupLocator, closePopupLocator) {
    this.titleText = titleText;
    this.consultationButtonLocator = consultationButtonLocator;
    this.popupLocator = popupLocator;
    this.closePopupLocator = closePopupLocator;
  }

  validateUrl() {
    return cy.url().should('include', '/locations/austin/');
  }

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
