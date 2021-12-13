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

When('I go to {string} menu item', function (item) {
    await ($`a=${item}`).click();
});

When(/^I fill form:$/, function (formYaml) {
    const formData = YAML.parse(formYaml);
    console.log({ formData });
    // add implementation here
});