fixture('Slow down test speed')
    .page('http://devexpress.github.io/testcafe/example/');

test('Slow a particular action', async t => {
    await t.typeText('#developer-name', 'Peter', { speed: 0.5 });
});

test('Slow speed in a test', async t => {
    await t.setTestSpeed(0.5);
});
