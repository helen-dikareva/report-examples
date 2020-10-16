import { RequestLogger } from 'testcafe';

const logger = RequestLogger();

fixture `Auto recalculation for an assertion`
    .requestHooks(logger)
    .page `http://devexpress.github.io/testcafe/example`;

test('Correct using of the assertion recalculation', async t => {
    await t.expect(logger.contains(({ request }) => {
        return request.method === 'get';
    })).ok();
});

