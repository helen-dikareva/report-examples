fixture('Login page')
    .page('http://testcafe/login');

test('Login user', async t => {
    await t
        .typeText('.name', 'User name')
        .typeText('.password', 'password')
        .click('#login');
});

