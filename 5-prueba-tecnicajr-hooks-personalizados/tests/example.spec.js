// @ts-check
import { test, expect } from '@playwright/test';

const LOCAL_HOST_URL='http://localhost:5173/'
test('app sow ramdom fact and im', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

 const text= await  page.getByRole('paragraph')
 const image= await  page.getByRole('img')

 const textCont= await text.textContent()
 const imageSrc= await image.getAttribute('src')

 await expect(textCont?.length).toBeGreaterThan(0)
 await expect(imageSrc?.length).toBeGreaterThan(0)
});
