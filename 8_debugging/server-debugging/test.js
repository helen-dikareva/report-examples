import { Selector } from 'testcafe';

fixture('Server debugging')
    .page('http://devexpress.github.io/testcafe/example/');

test('Test with a debugger statement', async t => {
    await t.typeText('#developer-name', 'Peter Parker');

    const initialValue = await Selector('#developer-name').value;

    debugger;

    await t
        .pressKey('home right . delete delete delete delete')
        .expect(Selector('#developer-name').value).notEql(initialValue)
        .expect(Selector('#developer-name').value).eql('P. Parker');
});