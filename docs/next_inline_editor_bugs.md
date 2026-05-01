# next-inline-editor: Bug & Update Tracker

This document tracks issues found during the integration testing of the `next-inline-editor` npm package so they can be fixed in a future release.

## 1. Setup CLI Error: Duplicate Shebang
- **Issue:** Running `npx next-inline-editor` fails immediately with a `SyntaxError: Invalid or unexpected token`.
- **Cause:** The compiled output in `dist/bin/init.js` contains a duplicate shebang on the first two lines:
  ```javascript
  #!/usr/bin/env node
  #!/usr/bin/env node
  "use strict";
  ```
  Node parses the second shebang as invalid JavaScript.
- **Fix Required:** Update the build process (likely `tsup` configuration or the source file `bin/init.ts`) to ensure only a single shebang is present in the final compiled output.

## 2. Dev Server 404 on Initial Route Generation
- **Issue:** After running the setup script, navigating to `/admin/login` returns a 404 Not Found error.
- **Cause:** Next.js (specifically versions like 15/16 App Router) sometimes fails to pick up newly generated route directories (`app/admin` and `app/api/admin`) while the dev server is actively running.
- **Fix Required:** Add a note to the CLI output or README explicitly instructing users to restart their Next.js dev server (`npm run dev`) after running the setup script to ensure new routes are registered.

## 3. Missing "use client" in Generated Pages
- **Issue:** The generated `admin/page.tsx` and `admin/login/page.tsx` throw a `useState only works in Client Components` error.
- **Cause:** The CLI setup script generates these pages without the `"use client";` directive at the top, but they import and use components from the library that rely on React hooks.
- **Fix Required:** Update the CLI template strings in `bin/init.ts` (functions `adminLoginPage` and `adminPage`) to include `"use client";` at the very top of the generated files.

## 4. Documentation Accessibility
- **Issue:** The package README is buried in `node_modules/next-inline-editor/README.md`, making it hard for developers to reference while building.
- **Fix Required:** Add a "Documentation" or "Help" link directly in the `AdminEditor` toolbar that opens the README (or a hosted version of it). Also, consider copying the README to the project root during `init` if it doesn't already exist.

## 5. Static Whitelist (ALLOWED_FILES) limits DX
- **Issue:** The `app/api/admin/save/route.ts` hardcodes a `Set` of `ALLOWED_FILES` based on what the `init` script finds at that exact moment. If a developer creates a new JSON file (e.g., `content/about.json`) *after* running `init`, the save API will reject their edits with a 400 error.
- **Fix Required:** Instead of a static hardcoded array, the API route should dynamically validate paths (e.g., ensuring they strictly start with `content/` and end in `.json` without directory traversal `..`). Alternatively, log a warning/instruction to the console reminding users to update the whitelist manually.
