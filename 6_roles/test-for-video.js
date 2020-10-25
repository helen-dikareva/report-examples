import { Role } from 'testcafe';
import { pageHeader, loginPage, manageAccountPage, myDownloadsPage } from './utils/page_model';
import credentials from './utils/credentials';

fixture `Login functionality`
    .page `https://www.devexpress.com/`;

const userRole = Role('https://www.devexpress.com/MyAccount/LogIn/', async t => {
    await t
        .typeText(loginPage.loginInput, credentials.user1.login, { paste: true })
        .pressKey('tab')
        .typeText(loginPage.passwordInput, credentials.user1.password, { paste: true })
        .click(loginPage.termOfUseCheckbox)
        .click(loginPage.loginButton);
});

test('Logged user can buy a product', async t => {
    await t.useRole(userRole);

    await t
        .click(pageHeader.myAccountIcon)
        .click(pageHeader.downloadsItem)

        .expect(myDownloadsPage.licenseList.visible).ok()
        .click(myDownloadsPage.newLicenseLink);
});

test('Logged user can manage their account', async t => {
    await t.useRole(userRole);

    await t
        .click(pageHeader.myAccountIcon)
        .click(pageHeader.manageProfileItem)

        .expect(manageAccountPage.accountInfo.visible).ok()
        .click(manageAccountPage.personalInfoUpdateLink);
});
