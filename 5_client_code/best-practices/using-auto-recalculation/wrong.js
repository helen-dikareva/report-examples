import { ClientFunction } from 'testcafe';

fixture `Wrong using of assertions recalculation`;

const getUrl = ClientFunction(() => window.location.href);

test('Don\'t use await inside assertions', async t => {
    await t
        .click('a')
        .expect(await getUrl()).eql('https://devexpress.github.io/testcafe/example/');
});

test('Awaited values cannot be used for assertion recalculation', async t => {
    await t.click('a');

    const currentLocation = await getUrl();

    await t.expect(currentLocation).eql('https://devexpress.github.io/testcafe/example/');
});
