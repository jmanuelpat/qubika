import BasePage from "./POM/BasePage.js"
import AustinOfficePage from "./POM/AustinOfficePage.js"

describe('visiting base URL', () => {

  const basePage = new BasePage('.logo-wrapper', '#menu-header-main-menu', '.offices_section')
  const austinOfficePage = new AustinOfficePage('.offices_section', 'Austin', '.buttons', '.dl-modal-content', '.calendar-modal > .dl-modal-content > .btn-close-modal')

  before(() => {

    //Visiting home URL
    basePage.visit()
  })

  it.only('Decemberlabs home and Austin office page', () => {

      //Validating Home title, logo and main menu
      basePage.validateTitle()
      basePage.validateLogo()
      basePage.validateMainMenu()

      //Going to Austin Office page
      basePage.navigateToAustinOffice()

      //Validating Austin Office Title & URL
      austinOfficePage.validateTitle()
      austinOfficePage.validateUrl()

      //Clicking on "Schedulle a free Consultation"
      austinOfficePage.scheduleConsultation().then(() => {

        //Validating that the Popup is visible
        austinOfficePage.validatePopupVisible()

        //Closing the Popup
        austinOfficePage.closePopup()

        //Validating that the Popup've been closed
        austinOfficePage.validatePopupNotVisible()
      })
    })
})