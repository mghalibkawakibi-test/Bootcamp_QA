import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.111.110:5571/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('mghalibkawakibi');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('kawakibitester2026');
  await page.locator('#togglePassword').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Username atau Password salah.').first().click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('M');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Muhammad ');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Muhammad G');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Muhammad Ghalib ');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Muhammad Ghalib K');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Muhammad Ghalib Kawakibi');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('kibitester2026');
  await page.locator('form').filter({ hasText: 'Username Password Login' }).locator('span').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Test Suite' }).click();
  await page.getByRole('link', { name: ' Buat Test Suite Baru' }).click();
  await page.getByText('-- Pilih Produk --').click();
  await page.getByRole('textbox', { name: 'Cari nama produk...' }).fill('ut');
  await page.locator('#projectOptionsList').getByText('UT BMS Hybrid').click();
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).click();
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).fill('Test ');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).fill('');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).fill('');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).fill('U');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).fill('Uji ');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).fill('Uji Pesan ');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nama Test Suite' }).fill('Uji Pesan Emoji');
  await page.getByRole('textbox', { name: 'Cari fitur...' }).click();
  await page.getByRole('textbox', { name: 'Cari fitur...' }).fill('pesan');
  await page.getByRole('checkbox', { name: 'Pesan - UT Hybrid' }).check();
  await page.getByRole('button', {
  name: ' Simpan Test Suite'
}).click();

const approveMenu = page.getByRole('link', {
  name: /Approve Test Suite/
});

await approveMenu.waitFor({
  state: 'visible',
  timeout: 90000
});

await approveMenu.click();
});