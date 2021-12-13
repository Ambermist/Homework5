const { When, Then, Given } = require('@cucumber/cucumber');

When(/^I go to "([^"]*)"$/, async function (url) {
    await browser.url(url);
});

When(/^I check login combinations:$/, async function (table) {
    const rows = table.hashes()
    for (const row of rows) {
        await $('#login').setValue(row.user);
        await $('#password').setValue(row.password);
        await $('button').click();
        await browser.pause(1000);
        if(row.user === ''){
            expect(await $('#error').getText())
            .toEqual('Login is empty')
        }
        else if(row.password === ''){
            expect(await $('#error').getText())
            .toEqual('Password is empty')
        }
        else if(row.user === 'old_walker@jw.com'){
            expect(await $('#error').getText())
            .toEqual('The user is suspended')
        }
        else {
            expect(await $('#error').getText())
            .toEqual('Fail to login')
        }
    }
});
