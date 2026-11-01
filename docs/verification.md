# Preview verification — 1 November 2026

Reviewed application source commit: `a9489fb01ee1b43896e2c9bd69cf1ceedf024a35`.

Netlify ready deployment: `6ae7abfbb850b9f2153913e1` (Deploy Preview #8). Production was not replaced. Final documentation-only commits do not alter the application reviewed here.

## Build and numerical checks

- `npm run lint`: passed.
- `npm run build`: passed; 41 pages generated.
- `npm test`: 8/8 passed, including independent full-likelihood SciPy optimisation/adaptive quadrature, censoring, CSV parity, exponential limiting behaviour, deterministic bootstrap, tied Kaplan–Meier events and the public Python reproduction.
- Independent reference: beta 2.3681005, eta 7,900.572 h. Default age-policy cost GBP 1,651.586 / 1,000 h, reactive GBP 2,285.035 / 1,000 h; lowest tested age 4,500 h. Fictional results only.
- No new application dependencies.

## HTTP and file checks

- 44 public route/download/redirect checks: passed against the immutable reviewed deploy URL.
- 41 referenced image/video assets: passed. All four videos return HTTP 206 for a 1,024-byte request with a valid Content-Range.
- Two internal Next.js error endpoints in the build manifest intentionally return their framework error statuses; they are not public content-route failures.
- `/resume.pdf` is byte-identical to the repository file: SHA-256 `35b7eae9983a41243b23ec7f97cf64ce7045ffc04466f50440471b83a4060c32`, 246,365 bytes, two A4 pages.
- CSV and Python downloads return HTTP 200.
- Former STM32 project URL redirects to the tracked-vehicle project.
- All directly referenced public assets in the generated HTML exist.
- Detailed results: [routes/downloads](qa/http-checks.json), [assets and video ranges](qa/asset-checks.json).

## Browser inspection and interaction checks

- Desktop homepage reviewed at a 1,363 px browser width: no document horizontal overflow. Hero reduced from the first implementation's 743 px to approximately 539 px after visual QA.
- Real application rendered inside 390 px and 768 px review iframes; measured content widths are 375 px and 753 px after scrollbars. Both have scroll width equal to client width. These are responsive CSS tests, not emulation of iOS/Android devices.
- Narrow-layout menu opens; Escape closes it and restores button focus. Lifesaving remains immediately after Education.
- Home Mechatronics filter reduces four selected cards to the two relevant projects; verified on desktop and narrow layout.
- FESTO overview initially shows the quick read with the investigation closed. Clicking the physical demonstration link opens the containing disclosure and reveals the video. No document overflow observed.
- Lab changing planned cost from GBP 4,000 to GBP 12,000 raises the selected age-policy cost from approximately GBP 1,652 to GBP 2,811 / 1,000 h; the interpretation changes from lower to higher than the reactive comparator. The reset button restores GBP 4,000 and the original comparison; verified on the narrow layout.
- Narrow-layout Lab has no document horizontal overflow; the sensitivity table scrolls inside its own container.
- Primary button text/background contrast approximately 5.12:1. Existing visible focus and reduced-motion handling retained.
- Browser logs inspected: observed error messages originated from the cloud-browser extension, not the application. This is not a claim of exhaustive runtime/error coverage.

## Evidence and publication limits

The confidential employer records are not part of the fictional lab. Valero option comparisons and readiness prompts are labelled educational interpretations, not historical approvals. The encoder result is a pulse-count comparison, not calibrated travel accuracy. Academic contributions and in-progress capstone scope remain explicit.

The retained CV has been checked for download integrity and format; it was not rewritten as part of this website task. No granted visa is claimed in new site copy. No analytics tracker was added. Real-device testing, a production Lighthouse run, formal model comparison and simultaneous statistical confidence coverage remain unverified.

[Desktop proof](qa/home-desktop.jpg) · [Responsive proof](qa/responsive-layouts.jpg)

The supplied master prompt explicitly reserves merging and replacing production for user approval. This PR remains a reviewable draft until approved.
