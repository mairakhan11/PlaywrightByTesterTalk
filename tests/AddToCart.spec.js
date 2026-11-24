const { test, expect } = require('@playwright/test');
const AddToCart = require('../POM/AddToCart');

test(' Item added to cart', async ({ page }) => {
  const addToCart = new AddToCart(page);
  await addToCart.Dashboard();
  await addToCart.addToCart();
  await addToCart.clickCart();
  await expect(page.getByText('ZARA COAT 3', { exact: true })).toBeVisible();
});