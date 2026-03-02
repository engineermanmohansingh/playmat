const {test, expect} = require('@playwright/test');


test('First playwright test - browser',async ({browser}) => {

   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://www.growreviews.com");
    
});

test('Second playwright test - page',async ({browser,page}) => {

//    const context = await browser.newContext();
//    const page = await context.newPage();
   await page.goto("https://www.grownearby.com");
   console.log(await page.title());
   await expect(page).toHaveTitle("Home Services Digital Marketing Company: Grow Nearby");
   expect(await page.title()).toBe("Home Services Digital Marketing Company: Grow Nearby");
   page.locator('');
});

test.only('Third playwright test - test login locators',async ({browser,page}) => {

//    const context = await browser.newContext();
//    const page = await context.newPage();
   await page.goto("https://practicetestautomation.com/practice-test-login/");   
   const username = page.locator('input[name="username"]');
   const password = page.locator('input[name="password"]');
   const submit = page.locator('button[id="submit"]');
   
   console.log(await page.title());
   await expect(page).toHaveTitle("Test Login | Practice Test Automation");
   expect(await page.title()).toBe("Test Login | Practice Test Automation");
   await username.fill("student");
   await password.fill("Password12");
   await submit.click();
   await expect(page.locator('div#error')).toContainText("invalid");
   await username.fill("student");
   await password.fill("Password123");
   await submit.click();
   await expect(page.locator('div .post-title')).toContainText("Logged In");
   await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation");
});