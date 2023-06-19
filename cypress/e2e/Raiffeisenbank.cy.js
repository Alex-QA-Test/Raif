/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';
import Form from '../fixtures/Raiffeisenbank-POM'
let phone = faker.phone.number('###-###-##-##')

describe('Тестирование формы', () => {

	beforeEach(() => {

		cy.viewport(1920, 1080)

		Form.Forma_Auth()

	})

  it('Полностью проходим опрос с валидными данными', function() {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Выгодные условия кредитования')
		.should('have.value', 'Выгодные условия кредитования')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Номер телефона (шаг 2 из 7)')
		.and('be.visible')

		Form.elements.Input_Phone()
		.type(phone)

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Адрес (шаг 3 из 7)')
		.and('be.visible')

		Form.elements.Input_Address()
		.type('г Ростов-на-Дону')

		Form.elements.Select()
		.within(() => {

			cy.contains('г Ростов-на-Дону').click()

		})

		Form.elements.Input_Address()
		.should('have.value', 'г Ростов-на-Дону')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Планируете ли вы сделать наш банк основным банком (шаг 4 из 7)')
		.and('be.visible')

		Form.elements.Toggle()
		.check({force: true})
		.should('be.checked')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Почему (шаг 5 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Без понятия')
		.should('have.value', 'Без понятия')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Занимаетесь ли вы инвестированием (шаг 6 из 7)')
		.and('be.visible')

		Form.elements.Toggle()
		.check({force: true})
		.should('be.checked')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Во что предпочитаете инвестировать (шаг 7 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('В рубль))')
		.should('have.value', 'В рубль))')

		Form.elements.Submit_Btn()
		.should('be.enabled').click()

		cy.contains('Форма успешно отправлена, спасибо!')
		.should('be.visible')

  })

	it('Полностью проходим опрос с валидными данными, но на 6ом шаге не нажимаем на Тогл', function() {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Выгодные условия кредитования')
		.should('have.value', 'Выгодные условия кредитования')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Номер телефона (шаг 2 из 7)')
		.and('be.visible')

		Form.elements.Input_Phone()
		.type(phone)

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Адрес (шаг 3 из 7)')
		.and('be.visible')

		Form.elements.Input_Address()
		.type('г Ростов-на-Дону')

		Form.elements.Select()
		.within(() => {

			cy.contains('г Ростов-на-Дону').click()

		})

		Form.elements.Input_Address()
		.should('have.value', 'г Ростов-на-Дону')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Планируете ли вы сделать наш банк основным банком (шаг 4 из 7)')
		.and('be.visible')

		Form.elements.Toggle()
		.check({force: true})
		.should('be.checked')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Почему (шаг 5 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Без понятия')
		.should('have.value', 'Без понятия')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Занимаетесь ли вы инвестированием (шаг 6 из 7)')
		.and('be.visible')

		Form.elements.Toggle()
		.should('not.be.checked')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Планируете ли в обозримом будущем (шаг 7 из 7)')
		.and('be.visible')

		Form.elements.Toggle()
		.check({force: true})
		.should('be.checked')

		Form.elements.Submit_Btn()
		.should('be.enabled').click()

		cy.contains('Форма успешно отправлена, спасибо!')
		.should('be.visible')

	})

	it('Проверка изменения следующего вопроса в зависимости от ответа на 6ом шаге', function() {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Выгодные условия кредитования')
		.should('have.value', 'Выгодные условия кредитования')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Номер телефона (шаг 2 из 7)')
		.and('be.visible')

		Form.elements.Input_Phone()
		.type(phone)

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Адрес (шаг 3 из 7)')
		.and('be.visible')

		Form.elements.Input_Address()
		.type('г Ростов-на-Дону')

		Form.elements.Select()
		.within(() => {

			cy.contains('г Ростов-на-Дону').click()

		})

		Form.elements.Input_Address()
		.should('have.value', 'г Ростов-на-Дону')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Планируете ли вы сделать наш банк основным банком (шаг 4 из 7)')
		.and('be.visible')

		Form.elements.Toggle()
		.check({force: true})
		.should('be.checked')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Почему (шаг 5 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Без понятия')
		.should('have.value', 'Без понятия')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Занимаетесь ли вы инвестированием (шаг 6 из 7)')
		.and('be.visible')

		Form.elements.Toggle()
		.check({force: true})
		.should('be.checked')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Во что предпочитаете инвестировать (шаг 7 из 7)')
		.and('be.visible')

		Form.elements.Back_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Занимаетесь ли вы инвестированием (шаг 6 из 7)')
		.and('be.visible')

		Form.elements.Toggle()
		.uncheck({force: true})
		.should('not.be.checked')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Планируете ли в обозримом будущем (шаг 7 из 7)')
		.and('be.visible')

	})

	it('Проверяем, что ссылка с условиями подачи онлайн-заявки имеет атрбут target', () => {

		Form.elements.Link()
		.and('have.attr', 'target', '_blank')

		Form.elements.Link()
		.should('have.attr', 'href')
		.then((link) => {

			cy.origin(link, () => {

				cy.visit('/')
				cy.url().should('eq', 'https://www.raiffeisen.ru/')

				})
		})

	})

it('Вводим номер телефона не полностью', () => {

	Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Выгодные условия кредитования')
		.should('have.value', 'Выгодные условия кредитования')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Номер телефона (шаг 2 из 7)')
		.and('be.visible')

		Form.elements.Input_Phone()
		.type('90853')
		.should('have.value', '+7 (908) 53')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Text_Error_Phone()
		.should('be.visible')

	})

	it('В поле телефона вводим текст', () => {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('мой телефон')
		.should('have.value', 'мой телефон')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Step()
		.should('contain', 'Номер телефона (шаг 2 из 7)')
		.and('be.visible')

		Form.elements.Input_Phone()
		.type('Аргентина манит негра')
		.should('have.value', '+7 (')

	})

	it('Проверяем, что при обновлении страницы поле очищается', () => {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Выгодные условия кредитования')
		.should('have.value', 'Выгодные условия кредитования')

		cy.reload()

		Form.elements.Input_Text()
		.should('have.value', '')

	})

	it('Ввод пробелов на первом шаге', () => {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.should('be.visible')

		Form.elements.Input_Text()
		.type('          ')
		.should('have.value', '          ')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Text_Error()
		.should('be.visible')

	})

	it('Проверка пагинации (изменение фона у иконки при переходе на следющий шаг)', () => {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.should('be.visible')

		Form.elements.Pagination()
		.children()
		.children()
		.eq(0)
		.should('have.css', 'background-color', 'rgb(43, 45, 51)')

		Form.elements.Input_Text()
		.type('Выгодные условия кредитования')
		.should('have.value', 'Выгодные условия кредитования')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Pagination()
		.children()
		.children()
		.eq(0)
		.should('have.css', 'background-color', 'rgb(254, 230, 0)')

	})

	it('Проверка стирания вводимых данных', () => {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.should('be.visible')

		Form.elements.Input_Text()
		.type('Выгодные условия кредитования')
		.should('have.value', 'Выгодные условия кредитования')

		Form.elements.Input_Text()
		.clear()
		.should('have.value', '')

	})

	it('Проверка на обязательнность поля', function() {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.should('be.visible')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Text_Error()
		.should('be.visible')

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.should('be.visible')

	})

	it('Проверяем ховер на кнопке "Далее', function() {

		Form.elements.Next_Btn()
		.should('have.css', 'background-color', 'rgb(254, 230, 0)')

		Form.elements.Next_Btn()
		.realHover({ position: "center" })

		Form.elements.Next_Btn()
		.should('have.css', 'background-color', 'rgb(238, 216, 10)')

	})

	it('Проверяем ховер на кнопке "Назад', function() {

		Form.elements.Step()
		.should('contain', 'Почему выбрали наш банк (шаг 1 из 7)')
		.and('be.visible')

		Form.elements.Input_Text()
		.type('Выгодные условия кредитования')
		.should('have.value', 'Выгодные условия кредитования')

		Form.elements.Next_Btn()
		.should('be.enabled')
		.click()

		Form.elements.Back_Btn()
		.should('have.css', 'color', 'rgb(43, 45, 51)')

		Form.elements.Back_Btn()
		.realHover({ position: "center" })

		Form.elements.Back_Btn()
		.should('have.css', 'color', 'rgb(0, 128, 156)')

	})

})
