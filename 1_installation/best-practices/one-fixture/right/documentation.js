fixture('Documentation ')
    .page('http://testcafe/docs');

test('Getting started', async t => {
    await t.click('h1');
});
