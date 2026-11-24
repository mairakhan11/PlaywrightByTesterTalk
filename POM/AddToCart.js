class AddToCart {
  constructor(page) {
    this.page = page;
    this.zaraCoat3 = page.locator('.card').filter({ hasText: 'ZARA COAT 3' });
    this.zaraCoat3AddToCartButton = this.zaraCoat3.getByRole('button', { name: 'Add To Cart' });
    this.cartLink = page.locator('[routerlink="/dashboard/cart"]');
  }

  async Dashboard() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
  }

  async addToCart() {
    await this.zaraCoat3AddToCartButton.click();
  }

  async clickCart() {
    await this.cartLink.click();
  }
}
module.exports = AddToCart;