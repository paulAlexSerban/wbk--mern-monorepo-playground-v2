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
    await browser.pause(1000);
});

Then(/^The URL should match (.*)$/, async (expectedURL: string) => {
    expect(await browser.getUrl()).toMatch(expectedURL); // old chai API method
    expect(browser).toHaveUrl(expectedURL); // expect-webdriverio API method
});