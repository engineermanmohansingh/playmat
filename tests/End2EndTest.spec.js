const {test,expect} = require('@playwright/test');

test.only('Client app login and cart checkout ',async ({browser}) => {

   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client");

   const products = page.locator('.card-body');
    await page.locator('#userEmail').fill("virdifylabs@gmail.com");
    await page.locator('#userPassword').fill("Test@123");
    await page.locator('[value="Login"]').click();
    await page.waitForLoadState('networkidle');
    await products.nth(0).waitFor();
    await page.locator('//b[text()="iphone 13 pro"]/ancestor::div[@class="card-body"]/button[contains(.,"Add")]').click();
    await page.locator('[routerlink="/dashboard/cart"]').click();
    await page.locator('h3:has-text("iphone 13 pro")').waitFor();
    expect (await page.locator('h3:has-text("iphone 13 pro")').isVisible()).toBeTruthy();
    await page.locator('text=Checkout').click();
    await page.locator('[placeholder="Select Country"]').pressSequentially("india",{delay:100});
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    await page.locator("//span[text()=' India']").click();
    expect (await page.locator('.user__name label').first().textContent()).toContain("virdifylabs@gmail.com");

    await page.locator('//a[contains(.,"Place Order")]').click();
    await page.locator('.hero-primary').waitFor();
    expect (await page.locator('.hero-primary').textContent()).toContain(" Thankyou for the order. ");
    let orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId);
    orderId = orderId.split("|")[1].trim();
    await page.locator('label:has-text("Orders History Page")').click();
    await page.locator('.table .ng-star-inserted').nth(0).waitFor();
    await page.locator(`//th[text()="${orderId}"]/..//button[text()='Delete']`).click();
    await page.pause();
});