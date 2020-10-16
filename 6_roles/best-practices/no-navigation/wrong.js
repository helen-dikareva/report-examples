import { Role } from 'testcafe';

export const roleWithNavigation = Role('https://www.devexpress.com/MyAccount/LogIn/', async t => {
    await t
        //go to the login page
        .click('a').withText('Go to login page')

        //login process

        //go to the testing page
        .click('a').withText('Open products');
});

fixture `Wrong using of built-in navigation`
    .page `https://www.devexpress.com/`;

test('Navigation before/after Role using', async t => {
    //go to the login page
    await t.click('a').withText('Go to login page');

    await t.useRole(roleWithNavigation);

    //go to the testing page
    await t.navigateTo('http://example/products');

    //test actions
});

