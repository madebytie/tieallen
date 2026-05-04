import { chromium } from "playwright";
import path from "path";

(async () => {
  console.log("Starting mobile screenshot capture fix...");

  const browser = await chromium.launch({ headless: true });

  // Create a mobile context (iPhone 13 dimensions)
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  const page = await context.newPage();
  const outDir = path.resolve("./public/projects/allen-estates");

  console.log("Capturing Mobile Property Experience Section...");

  // Go to Casa Jefe
  await page.goto("https://allenestates.vizonos.com/properties/casa-jefe", {
    waitUntil: "networkidle",
  });

  await page.waitForTimeout(2000); // Wait for initial load

  // Scroll down to the Gallery / Experience area
  await page.evaluate(() => {
    // The mobile view has a specific gallery track, or we can look for headings
    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6, [class*='name'], [class*='title']"));
    const targetHeading = headings.find(el => el.textContent && el.textContent.toLowerCase().includes("experience"));

    if (targetHeading) {
      targetHeading.scrollIntoView({ behavior: "auto", block: "start" });
      window.scrollBy(0, -50); // Adjust up slightly
    } else {
      // Fallback: look for the gallery container directly
      const gallery = document.querySelector('[class*="PropertyGallery"]');
      if (gallery) {
        gallery.scrollIntoView({ behavior: "auto", block: "start" });
        window.scrollBy(0, -50);
      } else {
        // Fallback hardcoded scroll depth if elements aren't easily found
        window.scrollTo(0, 1500);
      }
    }
  });

  // Wait extra time for the lazy-loaded slider images to fully load into view
  await page.waitForTimeout(4000);

  await page.screenshot({
    path: path.join(outDir, "mobile-property-section.png"),
  });

  console.log("Closing browser...");
  await context.close();
  await browser.close();

  console.log("✅ Mobile screenshot captured successfully.");
})().catch(console.error);
