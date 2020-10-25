import { Selector } from 'testcafe';

fixture `Auto waiting for an element`
    .page `https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadPanel/Overview/jQuery/Light/`;

test('Loading data test', async t => {
    await t
        .switchToIframe('#demoFrame')
        .click(Selector('span').withText('Load Data'))
        .click(Selector('b').withText('jheart@dx-email.com'));
});