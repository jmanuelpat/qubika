

describe('visiting base url', () => {
    
    beforeEach(() => {
        //Visit base URL
        cy.visit('https://inhouse.decemberlabs.com/')

        //Hide requests
        cy.intercept({ resourceType: /xhr|fetch/}, {log: false})

        //Validating title
        cy.get('.logo-wrapper').should('be.visible')

        //Validating header main menu
        cy.get('#menu-header-main-menu').should('be.visible')
    });
    it('Navigate to Austin office site', () => {
        
        cy.get('.offices_section').within(() => {
            cy.get('a[href*="/locations/austin"]').click()
        })
        //Validating URL
        cy.url().should('include', '/locations/austin/')

        //Validating Title
        cy.get('h1').contains('Austin').should('be.visible')

        //Scheduling a free consultation
        cy.get('.buttons').contains('Schedule free consultation').click().then($iframe => {
                    
            //Validating pop-up
            cy.get('.dl-modal-content').should('be.visible')

            //Close popup
            cy.wait(1200)
            cy.get('.calendar-modal > .dl-modal-content > .btn-close-modal').click()

            //Validating that pop-up isn't visible
            cy.get('.dl-modal-content').should('be.not.visible')      

        })        
    });

});

