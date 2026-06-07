import { test, expect } from '@playwright/test';
import { getUrl } from '../util/commonutil';

test('Login Page', async ({ page }) => {
  console.log('Login Page test started');
  const loginUrl = getUrl('/login');
  console.log(`Navigating to ${loginUrl}`);
  await page.goto(loginUrl);
  await expect(page.getByRole('heading', { name: 'Test Login page for' })).toBeVisible();
  console.log('Login page loaded successfully');

  await page.getByRole('textbox', { name: 'Username' }).fill('Practice');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  console.log('Filled valid username and password');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Hi, practice!' })).toBeVisible();
  console.log('Successful login verified');

  await page.getByRole('link', { name: 'Logout' }).click();
  console.log('Logged out of the secure area');

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  console.log('Filled invalid username and password for negative validation');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your password is invalid!')).toBeVisible();
  console.log('Invalid login message displayed as expected');
});