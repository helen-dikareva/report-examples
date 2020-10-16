import { formPage } from './page-model'

fixture('Using common action from PageModel')
    .page('http://devexpress.github.io/testcafe/example/');

test('Submitting page using PageModel method', async t => {
    await t.typeText(formPage.nameInput, 'Peter Parker');

    await formPage.submitForm();
});
