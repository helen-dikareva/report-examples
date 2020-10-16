import { Selector } from 'testcafe';

fixture('Live mode')
    .page('http://devexpress.github.io/testcafe/example/');

const nameInput = Selector('#developer-name');

test('Editing test in live-mode', async t => {
    await t
        .typeText(nameInput, 'Peter Parker')
        .expect(nameInput.value).eql('Peter');
});
