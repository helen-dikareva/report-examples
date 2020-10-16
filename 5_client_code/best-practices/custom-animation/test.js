import { ClientFunction } from 'testcafe';

const checkAnimationDone = ClientFunction(() => {
    //check something on the page
});

fixture `Client function demo`
    .beforeEach(async () => {
        //wait for animation complete
        await t.expect(checkAnimationDone()).ok({ timeout: 50000 });
    });
