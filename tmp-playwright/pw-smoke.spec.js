const { test } = require('@playwright/test');

test('capture landing screenshot', async ({ page }) => {
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.locator('text=How to test in 5 minutes').scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'tmp-playwright/landing-how-to-test.png', fullPage: true });
});
