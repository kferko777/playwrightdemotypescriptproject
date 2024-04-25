import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/components/HomePage'
import { BasePage } from '../../page-objects/components/BasePage'

test.describe('Search Results', () => {
  test('Should find search results', async ({ page }) => {
    let homePage: HomePage = new HomePage(page)
    let basePage:BasePage = new BasePage(page)
    await page.goto('/');
    await basePage.acceptCookies();
    await basePage.clickDiscoverButton();
    await homePage.goToShop();
    await homePage.openProductPage();
    await homePage.addToCart();
    const basketCount = await basePage.getBasketCount();
    console.log('Basket Count:', basketCount); // Log the actual value

    const basketCountLocator = page.locator("input[value='1']");
    await page.waitForSelector("input[value='1']");

    // Get the actual basket count value
    const actualBasketCount = await basketCountLocator.inputValue();

    // Log the actual value
    console.log('Actual Basket Count:', actualBasketCount);

    // Assert the value
    expect(actualBasketCount).toEqual('1');
  })
})