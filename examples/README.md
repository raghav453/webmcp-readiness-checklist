# Review an assessment locally

Requires Node.js 20 or later; no dependencies or network requests. From the repository root:

```sh
node examples/review-evidence.mjs examples/assessment.sample.json
```

The supplied sample intentionally exits 1 and reports missing browser evidence. Copy it, record your own environment and gate evidence, then re-run. Exit 0 means the documented evidence is complete enough for a **human review**; the script cannot verify the truth of your evidence, crawl a website, discover browser tools, or approve release.

Use the inventory CSV for candidate design and the JSON for release gates. The rows are fictional examples, not tested product integrations. Runnable browser actions live in the companion [action examples](https://github.com/raghav453/webmcp-action-examples).
