import { Selector } from 'testcafe';

fixture('A basic example that illustrate how to use TestCafe API')
    .page('http://devexpress.github.io/testcafe/example/');

test('A simple test with form sending', async t => {
    await t
        .typeText(Selector('#developer-name'), 'Peter Parker')
        .click(Selector('label').withText('Re-using existing JavaScript code'))
        .click(Selector('label').withText('MacOS'))

        .click(Selector('#submit-button'))

        .expect(Selector('#article-header').textContent).eql('Thank you, Peter Parker!');
});
