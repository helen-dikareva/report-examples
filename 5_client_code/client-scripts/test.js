import { ClientFunction } from 'testcafe';

fixture('Check the a11y')
    .page('https://sqadays.com/en/index')
    .clientScripts([
        './node_modules/axe-core/axe.min.js'
    ]);
    

test("Shouldn't have any a11y issues", async t => {
    const getViolation = ClientFunction(() => axe.run());

    const { violations } = await getViolation();
    const axeErrors      = violations.map(violation => violation.description);

    console.log('Errors:', axeErrors);

    await t.expect(axeErrors.length).eql(0);
});
