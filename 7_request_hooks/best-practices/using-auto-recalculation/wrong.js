import { RequestLogger } from 'testcafe';

fixture `Wrong using of assertions recalculation`;

const logger = RequestLogger();

test('Don\'t use await inside assertions', async t => {
    await t
        .expect(await logger.contains(({ request }) => {
            return request.method === 'get';
        })).ok();
});

test('Awaited values cannot be used for assertion recalculation', async t => {
    const hasRequest = await logger.contains(({ request }) => {
        return request.method === 'get';
    });

    await t.expect(hasRequest).ok();
});


