import { RequestLogger } from 'testcafe';

const logger          = RequestLogger();
const customUrlLogger = RequestLogger('https://example.com/resources');

fixture `Request Logger`
    .page `http://devexpress.github.io/testcafe/example`;

test
    .requestHooks(logger)
    ('Test requests logging', async t => {
        console.log(logger.requests);
        console.log('Request count:' + logger.requests.length);

        await t
            .expect(logger.contains(({ request, response }) => {
                return request.url.indexOf('favicon.ico') > 0 &&
                       request.method === 'get' &&
                       response.statusCode === 200;
            })).ok();
    });

