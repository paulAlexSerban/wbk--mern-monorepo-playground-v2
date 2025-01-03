import { browser } from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^Checkbox page is open$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/checkboxes');
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});

When(/^Check selected checkbox value$/, async () => {
    let checkboxArr = await browser.$$('#checkboxes > input[type="checkbox"]');
    for (let i = 0; i < (await checkboxArr.length); i++) {
        if (i === 0) {
            let value = await checkboxArr[i].isSelected();
            expect(value).toBe(false);
        }

        if (i === 1) {
            let value = await checkboxArr[i].isSelected();
            expect(value).toBe(true);
        }
    }
});

When(/^Perform checkbox interaction - select unselected checkbox$/, async () => {
    let checkboxArr = await browser.$$('#checkboxes > input[type="checkbox"]');
    for (let i = 0; i < (await checkboxArr.length); i++) {
        if ((await checkboxArr[i].isSelected()) === false) {
            await checkboxArr[i].click();
            break;
        }
    }
});

Then(/^The first checkbox value should be true$/, async () => {
    let checkboxArr = await browser.$$('#checkboxes > input[type="checkbox"]');
    expect(await checkboxArr[0].isSelected()).toBe(true);
});
