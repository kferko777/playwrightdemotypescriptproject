export async function loadHomepage(page) {
  await page.goto('https://www.ploom.co.uk/en')
}

export async function assertTitle(page) {
  await page.waitForSelector('h5')
}