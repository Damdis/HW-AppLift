describe('Applifting - click', () => {

    it('Zobrazeni', () => {
        cy.visit('http://test-stfu-applifting.herokuapp.com/')       
    })
    it('Vytvoření účtu + click', () => {
        cy.get('#name').type("StarbucksToDokazal")
        cy.get('.sc-bdVaJa').click()
    })
    var i;
    it('Opakované kliknutí', () => {
    for(i = 0; i < 9; i++){
        cy.get('.sc-bdVaJa').click() 
    }
    })
    it('Opakovaná návštěva stránky', () => {
        cy.visit('http://test-stfu-applifting.herokuapp.com/')       
    })
    it('Pokračování kliknutí', () => {
        cy.get('#name').type("StarbucksToDokazal")
        cy.get('.sc-bdVaJa').click()
    })
})
