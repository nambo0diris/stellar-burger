import {ingredients} from "../fixtures/orderRequest.json"
describe('burger constructor and checkout', () => {
  beforeEach(()=> {
    cy.visit('/');
    cy.setCookie('accessToken', 'test-access-token');
    window.localStorage.setItem('refreshToken', 'test-refresh-token');
  })
  afterEach(()=> {
    cy.clearLocalStorage();
    cy.clearCookies();
  })

  it('should open page by default', () => {
    cy.contains('Соберите бургер')
  })
  it('should drag and drop', () => {
    cy.get('[class*="burger-constructor_constructor_wrapper"]').as('constructor');
    cy.get('a').contains('Флюоресцентная булка R2-D3').trigger('dragstart').trigger('dragleave');
    cy.get('@constructor').trigger('dragenter').trigger('dragover').trigger('drop').trigger('dragend');
    cy.get('a').contains('Филе Люминесцентного тетраодонтимформа').trigger('dragstart').trigger('dragleave');
    cy.get('@constructor').trigger('dragenter').trigger('dragover').trigger('drop').trigger('dragend');
  })
  it('should open login page (not authenticated)', () => {
    cy.get('button').contains('Оформить заказ').click();
    cy.contains('Вход');
  })
  it('should login', () => {
    cy.get('[class*="burger-constructor_constructor_wrapper"]').as('constructor');
    cy.get('a').contains('Флюоресцентная булка R2-D3').trigger('dragstart').trigger('dragleave');
    cy.get('@constructor').trigger('dragenter').trigger('dragover').trigger('drop').trigger('dragend');
    cy.get('a').contains('Филе Люминесцентного тетраодонтимформа').trigger('dragstart').trigger('dragleave');
    cy.get('@constructor').trigger('dragenter').trigger('dragover').trigger('drop').trigger('dragend');
    cy.get('button').contains('Оформить заказ').click();
    cy.contains('Вход');

    cy.get('form').within(()=>{
      cy.get('input[name="email"]').type('anzor.haindrava@yandex.ru')
      cy.get('input[name="password"]').type('boroda')
      cy.get('button').contains('Войти').click();


    })
    cy.get('button').contains('Оформить заказ').click();

  })
  it('should make order', () => {
    cy.get('[class*="burger-constructor_constructor_wrapper"]').as('constructor');
    cy.get('a').contains('Флюоресцентная булка R2-D3').trigger('dragstart').trigger('dragleave');
    cy.get('@constructor').trigger('dragenter').trigger('dragover').trigger('drop').trigger('dragend');
    cy.get('a').contains('Филе Люминесцентного тетраодонтимформа').trigger('dragstart').trigger('dragleave');
    cy.get('@constructor').trigger('dragenter').trigger('dragover').trigger('drop').trigger('dragend');
    cy.get('button').contains('Оформить заказ').click();
    cy.contains('Вход');


    cy.get('form').within(()=> {
      cy.get('input[name="email"]').type('anzor.haindrava@yandex.ru');
      cy.get('input[name="password"]').type('boroda');
      cy.get('button').contains('Войти').click();
    })

    cy.get('button', ).contains('Оформить заказ').click();
    cy.intercept('POST','api/orders', {fixture: "orderResponse.json"}).as('orderRequest');
    cy.wait('@orderRequest').its('request.body').should("deep.equal", {ingredients});
    cy.contains("идентификатор заказа",{timeout: 18000});

  })

})
