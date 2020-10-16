import { myDownloadsPage } from '../../utils/page_model';
import { user1Role } from '../../utils/roles';

fixture `Shopping functionality`
    .page `https://www.devexpress.com/`;

test('Logged user can buy a product', async t => {
    await t.useRole(user1Role);


    await t.click(myDownloadsPage.newLicenseLink);
});
