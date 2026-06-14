// Renders both resume variants to PDFs (plus PNG proofs for visual review).
// Re-run after editing resume.html, resume-leadership.html, or resume.css:
//   node docs/Hire/generate-resume-pdf.mjs
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");

const jobs = [
  {
    // Founder / AI-native — the primary; /hire links to this filename.
    html: "resume.html",
    pdf: path.join(root, "public/tie-love-resume.pdf"),
    png: path.join(here, "resume-proof.png"),
  },
  {
    // Product-leadership variant for Principal/Lead at established orgs.
    html: "resume-leadership.html",
    pdf: path.join(root, "public/tie-love-resume-product-leadership.pdf"),
    png: path.join(here, "resume-leadership-proof.png"),
  },
];

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

for (const job of jobs) {
  const page = await browser.newPage({ viewport: { width: 816, height: 1056 } });
  await page.goto(`file://${path.join(here, job.html)}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: job.pdf,
    width: "8.5in",
    height: "11in",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await page.screenshot({ path: job.png, fullPage: true });
  await page.close();
  console.log(`Built ${job.html} -> ${path.relative(root, job.pdf)}`);
}

await browser.close();
