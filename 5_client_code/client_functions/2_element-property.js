import { Selector, ClientFunction } from 'testcafe';

fixture('Client Function demo')
    .page('https://www.w3schools.com/html/html_tables.asp');

test('Get element property', async t => {
    const table = Selector('#customers');

    const getFnText = ClientFunction((row, col) => {
            return getTable().rows[row].cells[col].innerText;
        },

        { dependencies: { getTable: table } }
    );

    await t.expect(getFnText(1, 1)).eql('Maria Anders');
});
