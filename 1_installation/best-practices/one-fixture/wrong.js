fixture('Login page')
    .page('http://testcafe/login');

test('Login user', async t => {
    await t
        .typeText('.name', 'User name')
        .typeText('.password', 'password')
        .click('#login');
});

fixture('Documentation ')
    .page('http://testcafe/docs');

test('Getting started', async t => {
    await t.click('h1');
});
