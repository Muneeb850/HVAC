import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('mockup_pictures');
const artifactDir = 'C:\\Users\\Rana Muneeb\\.gemini\\antigravity\\brain\\7df8e356-4110-4da9-b99c-7e1b904a3f3c';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function capture() {
  console.log('Launching Chrome via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

  console.log('Navigating to http://127.0.0.1:3000/ ...');
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  // 1. Open Booking Modal
  console.log('Clicking "Click to Book System" button...');
  const clickToBookBtn = await page.$('button.group\\/btn');
  if (clickToBookBtn) {
    await clickToBookBtn.click();
    await new Promise(r => setTimeout(r, 800));
    
    // Step 1 Screenshot
    const modalShot = path.join(outputDir, '21_booking_modal_form.png');
    await page.screenshot({ path: modalShot });

    // Click "Continue To Location"
    const buttons = await page.$$('button');
    for (const b of buttons) {
      const text = await page.evaluate(el => el.textContent, b);
      if (text.includes('Continue To Location')) {
        await b.click();
        break;
      }
    }
    await new Promise(r => setTimeout(r, 600));

    // Fill street address
    const addressInput = await page.$('input[placeholder*="Richfield St"]');
    if (addressInput) {
      await addressInput.type('4107 Richfield St, Aurora, CO');
    }
    await new Promise(r => setTimeout(r, 400));

    // Click "Continue To Contact Details"
    const buttons2 = await page.$$('button');
    for (const b of buttons2) {
      const text = await page.evaluate(el => el.textContent, b);
      if (text.includes('Continue To Contact Details')) {
        await b.click();
        break;
      }
    }
    await new Promise(r => setTimeout(r, 800));

    // Step 3 Screenshot (Aligned Name & Phone inputs!)
    console.log('Capturing Step 3 Aligned Inputs...');
    const step3Shot = path.join(outputDir, '22_booking_step3_aligned.png');
    await page.screenshot({ path: step3Shot });
  }

  await browser.close();

  // Copy captured images into artifact directory
  console.log('Copying images to artifact directory...');
  const files = [
    '21_booking_modal_form.png',
    '22_booking_step3_aligned.png'
  ];
  for (const file of files) {
    const src = path.join(outputDir, file);
    if (fs.existsSync(src)) {
      const dest = path.join(artifactDir, file);
      fs.copyFileSync(src, dest);
      console.log(`Copied ${file} to artifact directory.`);
    }
  }

  console.log('All mockups captured successfully!');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
