import { browser } from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^Web page is open$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/windows');
    await browser.waitUntil(
        async () => {
            return (await browser.execute(() => document.readyState)) === 'complete';
        },
        { timeout: 15000, timeoutMsg: 'Page not loaded' }
    );
    await browser.maximizeWindow();
});

When(/^Check webpage is completely loaded by listening for DOM content to be loaded$/, async () => {
    await browser.waitUntil(
        async () => {
            return (await browser.execute(() => document.readyState)) === 'complete';
        },
        { timeout: 15000, timeoutMsg: 'Page not loaded' }
    );
    await browser.pause(1000);
});

When(/^Open another window$/, async () => {
    let link = await browser.$('a[href="http://elementalselenium.com/"]');
    await link.click();
    await browser.waitUntil(
        async () => {
            return (await browser.execute(() => document.readyState)) === 'complete';
        },
        { timeout: 15000, timeoutMsg: 'Page not loaded' }
    );
    const windowHandles = await browser.getWindowHandles();
    expect(windowHandles.length).toBe(2);
});

Then(/^Browser should have two windows$/, async () => {
    const windowHandles = await browser.getWindowHandles();
    expect(windowHandles.length).toBe(2);
});

When(/^Switch back to old window$/, async () => {
    await browser.switchWindow(/^The Internet(.*)/);
    await browser.pause(1000);
});

Then(/^Check the title of the window to be The Internet$/, async () => {
    const title = await browser.getTitle();
    expect(title).toBe('The Internet');
});

When(/^Switch to window based on title$/, async () => {
    await browser.switchWindow('Home | Elemental Selenium');
    await browser.pause(1000);
});

Then(/^Check the title of the window to be Home | Elemental Selenium$/, async () => {
    const title = await browser.getTitle();
    await browser.pause(1000);
    expect(title).toBe('Home | Elemental Selenium');
});

When(/^Switch back to the main window$/, async () => {
    await browser.switchWindow('The Internet');
    await browser.pause(1000);
    const title = await browser.getTitle();
    expect(title).toBe('The Internet');
});
