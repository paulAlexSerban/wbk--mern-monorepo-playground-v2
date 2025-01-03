import { browser } from '@wdio/globals';
import { Given, Then, When } from '@wdio/cucumber-framework';

Given(/^Dropdown page is open$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/dropdown');
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});

When(/^Check the default dropdown value$/, async () => {
    let dropdown = await browser.$('//select/option[@selected="selected"]');
    let value = await dropdown.getText();
    expect(value).toBe('Please select an option');
});

When(/^Perform dropdown interaction - select option 1$/, async () => {
    let dropdown = await browser.$('#dropdown');
    await dropdown.selectByVisibleText('Option 1');
});

Then(/^The new dropdown value should be 1$/, async () => {
    let dropdown = await browser.$('#dropdown');
    expect(await dropdown.getValue()).toBe('1');
});

When(/^Perform dropdown interaction - select option 2$/, async () => {
    let dropdown = await browser.$('#dropdown');
    await dropdown.selectByIndex(2);
});

Then(/^The new dropdown value should be 2$/, async () => {
    let dropdown = await browser.$('#dropdown');
    expect(await dropdown.getValue()).toBe('2');
});

When(/^Perform dropdown interaction - select option 1 of 2$/, async () => {
    let dropdownArr = await browser.$$('#dropdown > option');
    for (let i = 0; i < (await dropdownArr.length); i++) {
        if (i === 1) {
            await dropdownArr[i].click();
            break;
        }
    }
});

Then(/^The new dropdown value should be 1 again$/, async () => {
    let dropdown = await browser.$('#dropdown');
    expect(await dropdown.getValue()).toBe('1');
});
