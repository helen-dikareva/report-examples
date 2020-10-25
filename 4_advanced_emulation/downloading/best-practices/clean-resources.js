fixture `Uploading and Download tests`
    .page('./index.html')
    .afterEach(async t => {
        //clean each uploaded/downloaded file
    })
    .after(async () => {
        //clean all files after all tests
    });


test('Test', async () => {
    //...
});