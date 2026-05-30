import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standarduser');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secre');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="password"]').fill('secre-sauce');
  await page.locator('[data-test="password"]').press('Tab');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secre-sauc');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').dblclick();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  await page.locator('[data-test="item-5-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
});