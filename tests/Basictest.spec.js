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

test('Third playwright test - test login locators',async ({browser,page}) => {

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
   await page.waitForLoadState('networkidle');
});


test.only('Fourth playwright test - child window handlings',async ({browser}) => {

   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const documentsLink = page.locator('[href*="documents-request"]');

   const [,newPage] = await Promise.all([
   documentsLink.click(),
   context.waitForEvent('page')]);
   
   // console.log(await newPage.getTitle());
   const text = await newPage.locator('.red').textContent();
   console.log(text);
   const email = text.split("@")[1].split(" ")[0];
   // console.log(email);
   await page.locator('#username').type(email);
   console.log("Text Content - " + await page.locator('#username').textContent());
   console.log("Input value - " + await page.locator('#username').inputValue());
   console.log("inner Text - " + await page.locator('#username').innerText());   
});