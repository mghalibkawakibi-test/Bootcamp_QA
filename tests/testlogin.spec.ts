import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //pre-condition
  await page.goto('https://www.google.com/search?q=emra.chat.login&oq=emra.chat.login&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTI0MTY4ajBqMqgCALACAA&sourceid=chrome&ie=UTF-8&sei=ExcUaonvGPDuseMPk7jnkQ0');
  await page.getByRole('link', { name: 'Back - Emra emra.chat https' }).click();

  //step
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@');
  await page.getByRole('textbox', { name: 'Email' }).press('Alt+CapsLock');
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@G');
  await page.getByRole('textbox', { name: 'Email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('link', { name: 'Forgot?' }).press('Tab')
  ;
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tester!3');
  await page.getByRole('button', { name: 'Sign In' }).click();
  import { test, expect } from '@playwright/test';
  await expect(page.getBy('heading', { name: 'Emra', exact: true })).toBeVisible();
});
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Accounts' }).click();
  await page.getByRole('button', { name: 'Conversations' }).click();
  await page.getByRole('button', { name: 'All Conversations' }).click();
  await page.getByRole('button', { name: 'Active' }).click();
});