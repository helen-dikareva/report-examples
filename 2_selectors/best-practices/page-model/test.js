import { formPage, thankYouPage } from './page-model'

fixture('Using PageModel pattern')
    .page('http://devexpress.github.io/testcafe/example/');

test('A test with PageModel', async t => {
    await t
        .typeText(formPage.nameInput, 'Peter Parker')

        .click(formPage.reuseInput)
        .click(formPage.macOSInput)

        .click(formPage.submitButton)

        .expect(thankYouPage.header.textContent).eql('Thank you, Peter Parker!');
});
