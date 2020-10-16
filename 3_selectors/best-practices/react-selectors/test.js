import { ReactSelector } from 'testcafe-react-selectors';

fixture('Testing React App')
    .page('http://example.com');

test('React selectors demo', async () => {
    const el = ReactSelector('LoginBtn');

    const { state, props, key } = await el.getReact();
});
