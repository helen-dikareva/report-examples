import { manageAccountPage, myDownloadsPage } from '../../utils/page_model';
import { user1Role } from '../../utils/roles';

fixture `Login functionality used in a hook`
    .page `https://www.devexpress.com/`
    .beforeEach(async t => {
        await t.useRole(user1Role);
    });

test('Logged user can buy a product', async t => {
    await t.click(myDownloadsPage.newLicenseLink);
});

test('Logged user can manage their account', async t => {
    await t.click(manageAccountPage.personalInfoUpdateLink);
});

