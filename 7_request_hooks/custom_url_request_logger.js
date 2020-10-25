import { RequestLogger } from 'testcafe';

const customUrlLogger = RequestLogger('https://example.com/resources');

fixture `Request Logger with custom URL`
    .page `http://devexpress.github.io/testcafe/example`;

test
    .requestHooks(customUrlLogger)
    ('Test requests logging', async t => {
        await t
            .expect(customUrlLogger.count(({ request }) => {
                return !/jquery/.test(request.url);
            })).eql(8)
    });

