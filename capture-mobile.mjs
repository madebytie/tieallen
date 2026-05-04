import { chromium } from "playwright";
import path from "path";

(async () => {
  console.log("Starting mobile screenshot capture...");

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

  // 1. Home Page Hero (Above the fold)
  console.log("Capturing Mobile Home Page...");
  await page.goto("https://allenestates.vizonos.com", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(2000); // Wait for animations to settle
  await page.screenshot({ path: path.join(outDir, "mobile-home-hero.png") });

  // 2. Property Page Hero
  console.log("Capturing Mobile Property Hero...");
  await page.goto("https://allenestates.vizonos.com/properties/casa-jefe", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(outDir, "mobile-property-hero.png"),
  });

  // 3. Property Page - Experience Section
  console.log("Capturing Mobile Property Experience Section...");
  // We are already on Casa Jefe page. Just scroll down to the "Experience" area.
  await page.evaluate(() => {
    // Find headings or key classes that might contain the word "Experience"
    const headings = Array.from(
      document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, .kicker, .headline, [class*="title"], [class*="heading"]',
      ),
    );
    const experienceHeading = headings.find(
      (el) =>
        el.textContent && el.textContent.toLowerCase().includes("experience"),
    );

    if (experienceHeading) {
      experienceHeading.scrollIntoView({ behavior: "auto", block: "start" });
      // Scroll up slightly to give it some breathing room at the top of the frame
      window.scrollBy(0, -60);
    } else {
      // Fallback scroll amount if the specific text isn't found
      window.scrollTo(0, 2200);
    }
  });

  // Wait extra time for the lazy-loaded grid images to fully load into view
  await page.waitForTimeout(3500);
  await page.screenshot({
    path: path.join(outDir, "mobile-property-section.png"),
  });

  console.log("Closing browser...");
  await context.close();
  await browser.close();

  console.log("✅ Mobile screenshots captured successfully.");
})().catch(console.error);
