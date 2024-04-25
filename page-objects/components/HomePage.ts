import { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly shopLink: Locator
  readonly productPloomAdvanced: Locator
  readonly addToCartButton: Locator
  
  constructor(page: Page) {
    this.page = page
    this.shopLink = page.locator(".navigation__link[href='/en/shop']")
    this.productPloomAdvanced = page.locator(
      ".aem-button__link[href='/en/shop/products/devices/ploom-x-advanced']",
    )
    this.addToCartButton = page.locator('button[data-testid="pdpAddToProduct"]')
           
  }

  async goToShop() {
    await this.shopLink.click()
  }

  async openProductPage() {
    await this.productPloomAdvanced.hover();
    await this.productPloomAdvanced.click()
  }

  async addToCart() {
    await this.addToCartButton.click()
  }

}
