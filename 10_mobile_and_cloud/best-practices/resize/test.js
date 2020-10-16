fixture('Adaptivity testing')
    .page('https://devexpress.github.io/testcafe/documentation/getting-started/');

test('Test with resize action', async t => {
    await t
        .resizeWindow(500, 200)

        .resizeWindowToFitDevice('iPhone 8', { portraitOrientation: true })

        .maximizeWindow();
});