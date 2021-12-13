const { When, Then, Given } = require('@cucumber/cucumber');
const YAML = require('yaml');

When(/^I go to "([^"]*)" link$/, async function (url) {
    await browser.url(url);
});
When (/^I login as: "([^"]*)", "([^"]*)"$/, async function (user, password){
    await $('#login').setValue(user);
        await $('#password').setValue(password);
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 10000 });
});

When('I go to {string} menu item', async function (item) {
    await $(`a=${item}`).click();
});

When(/^I fill form:$/, async function (formYaml) {
    const formData = YAML.parse(formYaml);
    console.log({ formData });
    const formObject = await $$('//form//input[@class="form-control"] | //form//textarea');
    for(const field of formObject){
        const id = await field.getAttribute('id');
        await field.setValue(formData[id])
    }
});