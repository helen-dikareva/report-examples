import { Selector } from 'testcafe';

fixture `Wrong using of assertions recalculation`
    .page `https://js.devexpress.com/Demos/WidgetsGallery/Demo/ProgressBar/Overview/jQuery/Light/`;

test('Don\'t use await inside assertions', async t => {
    await t
        .switchToIframe('#demoFrame')
        .click(Selector('span').withText('Start progress'))

        .expect(await Selector('.dx-progressbar-status').textContent).eql("Loading: 100%", { timeout: 15000 });
});

test('Awaited values cannot be used for assertion recalculation', async t => {
    await t
        .switchToIframe('#demoFrame')
        .click(Selector('span').withText('Start progress'));

    const statusText = await Selector('.dx-progressbar-status').textContent;

    await t.expect(statusText).eql("Loading: 100%", { timeout: 15000 });
});