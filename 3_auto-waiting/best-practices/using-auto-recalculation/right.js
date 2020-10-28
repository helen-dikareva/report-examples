import { Selector } from 'testcafe';

const element = Selector('input');

test('Correct using of the assertion recalculations', async t => {
    await t
        .typeText(element, 'temp')
        .expect(element.value).eql('temp');
});