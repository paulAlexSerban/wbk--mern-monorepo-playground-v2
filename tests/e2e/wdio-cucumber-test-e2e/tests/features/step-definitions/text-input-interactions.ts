import { browser } from '@wdio/globals';
import { Given, Then, When } from '@wdio/cucumber-framework';

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
