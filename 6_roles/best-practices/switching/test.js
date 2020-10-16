import { user1Role, user2Role } from '../../utils/roles';

fixture `Login functionality`
    .page `https://www.devexpress.com/`;


test('Switching between two roles', async t => {
    //user 1
    await t.useRole(user1Role);

    //user 1 -> user 2
    await t.useRole(user2Role);

    //user 2 -> user 1
    await t.useRole(user1Role);

    //user 1 -> user 2
    await t.useRole(user2Role);
});
