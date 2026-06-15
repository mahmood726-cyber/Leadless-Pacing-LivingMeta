# sentinel-findings.md

*Written by Sentinel — WARN-tier findings.*

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:44.473096+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:44.473096+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:44.473096+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:44.473096+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:44.473096+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:16168`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:44.473096+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:23003`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:44.473096+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `LEADLESS_PACING_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:44.712086+00:00

## [WARN] P1-fabrication-temporal-impossibility
- **Location:** `LEADLESS_PACING_REVIEW.html:7475`
- **Detail:** trial NCT05336877: year=2028 is in the future (current year is 2026)
- **Fix hint:** verify the trial year against the source paper (typo? completion vs registration year confusion?)
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:45.327006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8413`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8416`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9697`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9700`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9703`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9706`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9718`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9904`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10042`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10069`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10084`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10087`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10090`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10093`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10099`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10123`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10555`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10558`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10561`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43910`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43954`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44016`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:22:47.677270+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.236137+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.236137+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.236137+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.236137+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.236137+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:16168`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.236137+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:23003`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.236137+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `LEADLESS_PACING_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.421945+00:00

## [WARN] P1-fabrication-temporal-impossibility
- **Location:** `LEADLESS_PACING_REVIEW.html:7475`
- **Detail:** trial NCT05336877: year=2028 is in the future (current year is 2026)
- **Fix hint:** verify the trial year against the source paper (typo? completion vs registration year confusion?)
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:22:59.810306+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8413`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8416`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9697`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9700`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9703`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9706`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9718`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9904`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10042`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10069`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10084`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10087`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10090`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10093`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10099`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10123`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10555`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10558`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10561`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43910`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43954`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44016`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:01.763765+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:48.491613+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:48.491613+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:48.491613+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:48.491613+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:48.491613+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:16168`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:48.491613+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:23003`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:48.491613+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `LEADLESS_PACING_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:48.669907+00:00

## [WARN] P1-fabrication-temporal-impossibility
- **Location:** `LEADLESS_PACING_REVIEW.html:7475`
- **Detail:** trial NCT05336877: year=2028 is in the future (current year is 2026)
- **Fix hint:** verify the trial year against the source paper (typo? completion vs registration year confusion?)
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:23:49.033636+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8413`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8416`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9697`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9700`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9703`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9706`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9718`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9904`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10042`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10069`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10084`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10087`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10090`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10093`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10099`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10123`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10555`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10558`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10561`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43910`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43954`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44016`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:23:51.186159+00:00

## [WARN] P1-unpopulated-placeholder
- **Location:** `test/smoke.test.js:41`
- **Detail:** pattern matched: ok(!/\{\{[a-zA-Z_]+\}\}|REPLACE_ME|__PLACEHOLDER__/.test(html),
- **Fix hint:** Populate the placeholder or escape it before shipping. If the braces are intentional template syntax in a non-template file, exclude the file path via the rule's exclude list.

- **Source:** html-apps.md#safety-checks
- **When:** 2026-06-13T12:25:45.696611+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.433025+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.433025+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.433025+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.433025+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.433025+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:16168`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.433025+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:23003`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.433025+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `LEADLESS_PACING_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.600354+00:00

## [WARN] P1-fabrication-temporal-impossibility
- **Location:** `LEADLESS_PACING_REVIEW.html:7475`
- **Detail:** trial NCT05336877: year=2028 is in the future (current year is 2026)
- **Fix hint:** verify the trial year against the source paper (typo? completion vs registration year confusion?)
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:46.942104+00:00

## [WARN] P1-js-lockfile-present
- **Location:** `package.json`
- **Detail:** package.json present but no lockfile found (package-lock.json, yarn.lock, pnpm-lock.yaml, bun.lockb). Fresh clones will resolve unpinned dependency versions.
- **Fix hint:** run `npm install` (or `yarn`, `pnpm install`, `bun install`) once locally and commit the generated lockfile
- **Source:** lessons.md#code-quality
- **When:** 2026-06-13T12:25:47.089435+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8413`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8416`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9697`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9700`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9703`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9706`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9718`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9904`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10042`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10069`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10084`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10087`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10090`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10093`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10099`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10123`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10555`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10558`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10561`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43910`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43954`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44016`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:25:48.855571+00:00

## [WARN] P1-unpopulated-placeholder
- **Location:** `test/smoke.test.js:41`
- **Detail:** pattern matched: ok(!/\{\{[a-zA-Z_]+\}\}|REPLACE_ME|__PLACEHOLDER__/.test(html),
- **Fix hint:** Populate the placeholder or escape it before shipping. If the braces are intentional template syntax in a non-template file, exclude the file path via the rule's exclude list.

- **Source:** html-apps.md#safety-checks
- **When:** 2026-06-13T12:25:57.796861+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:58.611472+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:58.611472+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:58.611472+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:58.611472+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:58.611472+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:16168`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:58.611472+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:23003`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:58.611472+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `LEADLESS_PACING_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:58.809264+00:00

## [WARN] P1-fabrication-temporal-impossibility
- **Location:** `LEADLESS_PACING_REVIEW.html:7475`
- **Detail:** trial NCT05336877: year=2028 is in the future (current year is 2026)
- **Fix hint:** verify the trial year against the source paper (typo? completion vs registration year confusion?)
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:25:59.200541+00:00

## [WARN] P1-js-lockfile-present
- **Location:** `package.json`
- **Detail:** package.json present but no lockfile found (package-lock.json, yarn.lock, pnpm-lock.yaml, bun.lockb). Fresh clones will resolve unpinned dependency versions.
- **Fix hint:** run `npm install` (or `yarn`, `pnpm install`, `bun install`) once locally and commit the generated lockfile
- **Source:** lessons.md#code-quality
- **When:** 2026-06-13T12:25:59.390097+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8413`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8416`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9697`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9700`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9703`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9706`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9718`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9904`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10042`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10069`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10084`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10087`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10090`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10093`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10099`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10123`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10555`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10558`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10561`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43910`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43954`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44016`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:01.253300+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.116783+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.116783+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.116783+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.116783+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.116783+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:16168`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.116783+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `LEADLESS_PACING_REVIEW.html:23003`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.116783+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `LEADLESS_PACING_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.278656+00:00

## [WARN] P1-fabrication-temporal-impossibility
- **Location:** `LEADLESS_PACING_REVIEW.html:7475`
- **Detail:** trial NCT05336877: year=2028 is in the future (current year is 2026)
- **Fix hint:** verify the trial year against the source paper (typo? completion vs registration year confusion?)
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T12:26:29.649947+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:7777`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8140`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8413`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:8416`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9697`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9700`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9703`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9706`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9718`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:9904`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10042`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10069`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10084`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10087`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10090`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10093`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10099`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10123`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10555`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10558`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:10561`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43910`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:43954`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44016`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44348`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `LEADLESS_PACING_REVIEW.html:44366`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T12:26:31.557909+00:00
