import { Selector } from 'testcafe';

fixture `Auto recalculation for an assertion`
    .page `https://js.devexpress.com/Demos/WidgetsGallery/Demo/ProgressBar/Overview/jQuery/Light/`;

test('Start progress indicator test', async t => {
    await t
        .switchToIframe('#demoFrame')
        .click(Selector('span').withText('Start progress'))
        .expect(Selector('.dx-progressbar-status').textContent).eql("Loading: 100%", {timeout: 15000});
});