fixture('Client debugging')
    .page('http://devexpress.github.io/testcafe/example/');

test('Debug action', async t => {
    await t.debug();
});
