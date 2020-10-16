import { manageAccountPage } from '../../utils/page_model';
import { user1Role } from '../../utils/roles';

fixture `Account managing functionality`
    .page `https://www.devexpress.com/`;

test('Logged user can manage their account', async t => {
    await t.useRole(user1Role);

    await t.click(manageAccountPage.personalInfoUpdateLink);
});