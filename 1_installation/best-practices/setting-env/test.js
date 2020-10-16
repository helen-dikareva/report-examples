import { setDataBase, login } from './helpers';

fixture('Setting environment')
    .before(async () => {
        await setDataBase();
    })
    .beforeEach(async () => {
        await login('user-name', 'password');
    });
