describe('Pizza Order App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('sanity Checks', () => {
        expect(5).to.equal(5)
    })

    const nameInput = () => cy.get('.inputs > :nth-child(1) > input')
    const pepperoniBox = () => cy.get('#pepperoniBox')
    const chesseBox = () => cy.get(':nth-child(2) > input')
    const mushroomBox = () => cy.get(':nth-child(3) > input')
    const pepperBox = () => cy.get(':nth-child(4) > input')
    const submitBtn = () => cy.get('button')

    describe('MVP tests', () => {

        it('can type in name box', () => {
            nameInput()
                .type('Some Typing Happening')
                .should('have.value', 'Some Typing Happening')
                .clear()
        })

        it('can select multiple ingredients', () => {
            pepperoniBox().check()
            chesseBox().check()
            pepperoniBox().should('be.checked')
            chesseBox().should('be.checked')
            pepperoniBox().uncheck()
            chesseBox().uncheck()
        })

        it('can be sumbitted and clear', () => {
            nameInput()
                .type('Some Typing Happening')
                .should('have.value', 'Some Typing Happening')
                .clear()
            pepperoniBox().check()
            chesseBox().check()
            submitBtn().click()
            cy.visit('http://localhost:3000/pizza')
            nameInput().should('have.value', '')
            pepperoniBox().should('not.be.checked')
            chesseBox().should('not.be.checked')
        })
    })
})

/*
test that you can add text to the box
 test that you can select multiple toppings
 test that you can submit the form

 cy.get('.inputs > :nth-child(1) > input')
 cy.get(':nth-child(2) > input')
 cy.get(':nth-child(3) > input')
 cy.get(':nth-child(4) > input')
*/
