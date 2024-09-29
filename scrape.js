import playwright from 'playwright';

export const scrape = async (day = 5) => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto('https://www.locurio.com/book/');

    await page.waitForTimeout(5000);

    const iframe = page.frameLocator('#resova-iframe');

    await iframe
      .getByText(/Book now/i)
      .first()
      .click();

    await iframe.locator('.filtersMenuDateSelect').click();

    await iframe.locator('.nextmonth').nth(2).click();

    const calendar = iframe.locator('.resovaCalendarTimeSlotsOnly');

    const row = calendar.locator('tbody').nth(2);

    const cell = row.locator('td').nth(day - 1);
    await cell.click();

    await page.waitForTimeout(3000);

    await iframe.getByText(/Continue/i).click();
  } catch (err) {
    console.error(err);
  }
};

export default scrape;
