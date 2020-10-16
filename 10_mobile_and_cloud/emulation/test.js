fixture('Mobile emulation')
    .page('https://devexpress.github.io/testcafe/documentation/getting-started/');

//testcafe "chrome:emulation:device=iphone X" test.js

test('Test for a mobile emulation', async t => {
    await t
        .click('.cookie-notice .close-icon')
        .wait(5000);
});