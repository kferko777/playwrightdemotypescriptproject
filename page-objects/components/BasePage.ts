import { Locator, Page, expect } from '@playwright/test'
export class BasePage {
  readonly page: Page
  readonly basketCount: Locator;
  readonly cookiesBanner: Locator
  readonly discoverButton: Locator
   
  constructor(page: Page) {
    this.page = page
    this.cookiesBanner = page.locator('button:has-text("GOT IT")')
    this.discoverButton = page.locator('span:text-is("Yes, discover more")'),
    this.basketCount = page.locator("input[value='1']");
    
  }

  async acceptCookies() {
    const maxRetries = 3
    let retries = 0

    while (retries < maxRetries) {
      try {
        await this.page.waitForSelector('button:has-text("GOT IT")'),
          { timeout: 30000 }
        await this.cookiesBanner.click()
        break // Exit the loop if successful
      } catch (error) {
        console.error(
          `Error clicking cookies banner (attempt ${retries + 1}):`,
          error,
        )
        retries++
      }
    }
  }

  async clickDiscoverButton() {
    await this.discoverButton.click()
  }
  
  async getBasketCount() {
    await this.basketCount.hover();
    return await this.basketCount.textContent()
  }

}
