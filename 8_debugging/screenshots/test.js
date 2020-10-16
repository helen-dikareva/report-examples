fixture('Screenshots')
    .page('http://devexpress.github.io/testcafe/example/');

test('Screenshots taking test', async t => {
    await t
        .takeScreenshot()
        .takeScreenshot({ fullPage: true })

        .takeElementScreenshot('#elementId');
});
