import { Selector } from 'testcafe';

const element = Selector('input');

test('Do not use await inside assertions', async t => {
    await t
        .typeText(element, 'temp')
        .expect(await element.value).eql('temp');
});

test('Awaited values cannot be used for assertion recalculation', async t => {
    const value = await element.value;

    await t.expect(value).eql('temp');
});