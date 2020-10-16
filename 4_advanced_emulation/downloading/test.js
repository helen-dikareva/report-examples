import { t } from 'testcafe';
import fs from 'fs';
import path from 'path';
import os from 'os';

async function waitForFileDownload (path) {
    for (let i = 0; i < 10; i++) {
        if (fs.existsSync(path))
            return true;

        await t.wait(500);
    }

    return false;
}

fixture `Download`
    .page('./index.html');

const fileName           = 'text-file.txt';
const downloadedFilePath = path.join(os.homedir(), 'Downloads', fileName);

test('Test should wait for file download and check the result', async t => {
    //start downloading process
    await t.click('a');

    const isDownloaded = await waitForFileDownload(downloadedFilePath);

    await t.expect(isDownloaded).ok();
});