fixture('A basic example that illustrate how to use TestCafe API')
    .page('http://devexpress.github.io/testcafe/example/');

test('A simple test with form sending', async t => {
    await t
        .typeText('#developer-name', 'Peter Parker')

        .click('input[name="re-using"]')

        .click('#macos')

        .click(Selector('#submit-button'));
});
