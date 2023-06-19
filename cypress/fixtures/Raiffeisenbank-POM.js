class Form {

  elements = {

    Step: () => cy.get('[data-testid="stepText"]'), // Шаг с вопросом

    Input_Text: () => cy.get('[data-testid="text"]'), // текстовое поле с ответом

    Pagination: () => cy.get('[data-testid="stepIcon"]'), // Иконка с пагинацией

    Next_Btn: () => cy.get('[data-testid="nextButton"]'), // Кнопка Далее

    Input_Phone: () => cy.get('[data-testid="phone"]'), // Поле ввода телефона

    Back_Btn: () => cy.get('[data-testid="backButton"]'), // Кнопка Назад

    Input_Address: () => cy.get('[data-testid="address"]'), // Поле адреса

    Select: () => cy.get('.mantine-1nbt8iw'), // Выпадающий список в поле адреса

    Toggle: () => cy.get('[data-testid="toggle"]'), // Тогл

    Submit_Btn: () => cy.get('[data-testid="submitButton"]'), // Поле Отправить

    Text_Error: () => cy.contains('Ваше сообщение должно быть более 6 символов'), // Текст с ошибкой в текстовом поле

    Link: () => cy.get('a'), // Ссылка на первом шаге

    Text_Error_Phone: () => cy.contains('Ваше сообщение должно быть более 18 символов') // Текст с ошибкой в поле телефона
  }

  Forma_Auth() {
    cy.visit('https://raiffeisen-form.chulakov.dev/')
  }

}
export default new Form()
