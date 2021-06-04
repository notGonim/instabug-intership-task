
describe("render the login page ", () => {



    it.only("Login Should Not Work Bcoz of Password wrong ", () => {

        cy.visit("/login")
        cy.get('.form_container').should('exist')
        cy.get('.email').should('exist')
        cy.get('.email').type('mohamed2@instabug.com')
        .get('.password').should('exist')
        cy.get('.password').type('123ffdsfdsfdssdf45678')
        cy.get('#sub').click()
        cy.url().should('contain', '/');
    })



    it.only("Login Should Not Work Bcoz of Email wrong ", () => {

        cy.visit("/login")
        cy.get('.form_container').should('exist')
        cy.get('.email').should('exist')
        cy.get('.email').type('mohamefdsfsdfd2@instabug.com')
        .get('.password').should('exist')
        cy.get('.password').type('12345678')
        cy.get('#sub').click()
        cy.url().should('contain', '/');
    })


    it.only("Login Should Work", () => {

        cy.visit("/login")
        cy.get('.form_container').should('exist')
        cy.get('.email').should('exist')
        cy.get('.email').type('mohamed2@instabug.com')
        .get('.password').should('exist')
        cy.get('.password').type('12345678')
        cy.get('#sub').click()
        cy.url().should('contain', '/');
    })

})