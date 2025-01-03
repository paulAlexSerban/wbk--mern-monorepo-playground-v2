import { browser } from '@wdio/globals';
import { Given, Then, When } from '@wdio/cucumber-framework';

Given(/^DuckDuckGo page is opened$/, async () => {
    await browser.url('https://duckduckgo.com/');
    await browser.pause(1000);
});

When(/^I search with (.*)$/, async (searchItem: string) => {
    const searchInput = await browser.$(`[name=q]`);
    await searchInput.setValue(searchItem);
    await browser.keys('Enter');
    await browser.pause(1000);
});

When(/^I click on the first search result$/, async () => {
    const firstLink = await browser.$(`<h2>`);
    await firstLink.click();
    await browser.pause(10000);
});

Then(/^The URL should match (.*)$/, async (expectedURL: string) => {
    expect(await browser.getUrl()).toMatch(expectedURL); // old chai API method
    expect(browser).toHaveUrl(expectedURL); // expect-webdriverio API method
});

/*
 * Web Interactions
 **/

Given(/^Text inputs page is open$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/inputs');
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});

When(/^Perform text input interactions$/, async () => {
    let el = await browser.$('[type=number]');
    // type into the input box
    await el.setValue('12345');
    await browser.pause(1000);

    // clear the field and type or just add value
    await el.clearValue();
    await browser.pause(1000);

    // add value
    await el.addValue('12345');
    await browser.pause(1000);

    // click
    await el.click();
    await browser.pause(1000);

    // delete one of the characters
    await browser.keys('Backspace');

    // slow typing
    for (let char of '123456') {
        await browser.pause(100);
        await browser.keys(char);
    }
});

Then(/^The text inputs should be filled$/, async () => {
    let el = await browser.$('[type=number]');
    expect(await el.getValue()).toBe('1234123456');
});
