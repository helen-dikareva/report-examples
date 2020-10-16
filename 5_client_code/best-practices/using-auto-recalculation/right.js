import { ClientFunction } from 'testcafe';

fixture('Auto recalculation for an assertion')
    .page('https://devexpress.github.io/testcafe/example/');

const getUrl = ClientFunction(() => window.location.href);

test('Correct using of the assertion recalculation', async t => {
    await t.expect(getUrl()).eql('https://devexpress.github.io/testcafe/example/');
});
