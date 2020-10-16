import { Role } from 'testcafe';

export const roleWithNavigation = Role('https://www.devexpress.com/MyAccount/LogIn/', async t => {
    //login process
});

fixture `Correct using of built-in navigation`
    .page `https://www.devexpress.com/`;

test('Navigation encapsulated in Role', async t => {
    await t.useRole(roleWithNavigation);

    //test actions
});

