import { browser } from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';
import fs from 'fs';
Given(/^eCommerce web page is open$/, async () => {
    await browser.url('https://www.amazon.de');
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    browser.pause(10000);
});

When(/^Scroll to the bottom of the page$/, async () => {
    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    browser.pause(10000);
});

Then(/^Take a screenshot of the page$/, async () => {
    // check if dir exists else create it
    if (!fs.existsSync('./screenshots')) {
        fs.mkdirSync('./screenshots', { recursive: true });
    }
    await browser.saveScreenshot('./screenshots/screenshot.png');
    browser.pause(10000);
});
