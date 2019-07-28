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
    for(i = 0; i < 2500; i++){
        cy.get('.sc-bdVaJa').click() 
    }
    })
})