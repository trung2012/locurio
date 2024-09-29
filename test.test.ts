const playwright = require('playwright');

const scrape = async () => {
  const browser = await playwright.chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://www.locurio.com/book/');

    await page.locator('span:text("Book now")').first().click();

    await page.locator('.filtersMenuDateSelect').click();

    await page.locator('div.nextmonth:text("3")').click();

    const calendar = page.locator('.resovaCalendarTimeSlotsOnly');

    const row = calendar.locator('tbody').nth(3);
    const cell = row.locator('td').nth(5);
    await cell.click();
  } catch (err) {
    console.error(err);
  }
};
