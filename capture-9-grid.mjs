import { chromium } from "playwright";
import path from "path";
import fs from "fs";

(async () => {
  console.log("Starting 9-grid screenshot capture...");

  const browser = await chromium.launch({ headless: true });

  // Create a high-res desktop context
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  const outDir = path.resolve("./public/projects/allen-estates");

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Define the 9 unique views to capture for the grid
  const shots = [
    { url: "https://allenestates.vizonos.com", name: "grid-1.png", scroll: 0 }, // Home Hero
    { url: "https://allenestates.vizonos.com", name: "grid-2.png", scroll: 900 }, // Home Properties
    { url: "https://allenestates.vizonos.com", name: "grid-3.png", scroll: 1900 }, // Home Brand Experience
    { url: "https://allenestates.vizonos.com/properties/casa-jefe", name: "grid-4.png", scroll: 0 }, // Casa Jefe Hero
    { url: "https://allenestates.vizonos.com/properties/casa-jefe", name: "grid-5.png", scroll: 1200 }, // Casa Jefe Amenities
    { url: "https://allenestates.vizonos.com/properties/tamarack", name: "grid-6.png", scroll: 800 }, // Tamarack Info
    { url: "https://allenestates.vizonos.com/properties/havasu", name: "grid-7.png", scroll: 1000 }, // Havasu Content
    { url: "https://allenestates.vizonos.com/properties/california", name: "grid-8.png", scroll: 500 }, // California Content
    { url: "https://allenestates.vizonos.com/properties/holiday-loreto", name: "grid-9.png", scroll: 0 }, // Holiday Loreto Hero
  ];

  for (let i = 0; i < shots.length; i++) {
    const shot = shots[i];
    console.log(`Capturing [${i + 1}/9]: ${shot.name} at ${shot.url} (scroll: ${shot.scroll}px)`);

    await page.goto(shot.url, { waitUntil: "networkidle" });

    // Give time for initial page load animations
    await page.waitForTimeout(2000);

    // Scroll if needed to capture lower page sections
    if (shot.scroll > 0) {
      await page.evaluate((y) => window.scrollTo(0, y), shot.scroll);
      // Wait for lazy-loaded images and scroll-triggered fade animations
      await page.waitForTimeout(2500);
    }

    await page.screenshot({ path: path.join(outDir, shot.name) });
  }

  console.log("Closing browser...");
  await context.close();
  await browser.close();

  console.log("✅ 9-grid screenshots captured successfully.");
})().catch(console.error);
