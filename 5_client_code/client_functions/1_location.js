import { ClientFunction } from 'testcafe';

fixture `Client function demo`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Get url', async t => {
    const getUrl = ClientFunction(() => window.location.href);

    console.log('Site URL:' + await getUrl());
});
