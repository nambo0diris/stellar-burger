describe('popup with ingredient details', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('should open page with burger constructor by default', () => {
        cy.contains('Соберите бургер');
    })

    it('should open and close popup with ingredient details', () => {
        cy.get('a').contains('Флюоресцентная булка R2-D3').click();
        cy.contains('Детали ингредиента');
        cy.get('[class*="modal_close_button"]').click()
    })
})
