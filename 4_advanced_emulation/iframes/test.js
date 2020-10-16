import { Selector } from 'testcafe';

fixture('Context switching');

test('Switching in an iframe context and back', async t => {
    await t
        .switchToIframe(Selector('#iframeId'))
        .click(Selector('.iframe-input'))

        .switchToMainWindow()
        .click(Selector('.top-window-input'))
});
