# WebMCP readiness checklist

Use this WebMCP readiness checklist to decide whether a specific website action is ready for a controlled browser-agent pilot. It serves developers, website owners and reviewers who need evidence beyond an accessible button or a successful crawl. The repository provides release gates, an action inventory, a worked contract, a verification procedure and a local evidence-review script. It does not assign an SEO score or certify browser support.

Start with one read-only action. Separate what the public page reveals from what registration, execution, authorization and user confirmation tests demonstrate. An action can be well designed and still not be verified in a compatible browser.

## Start an assessment

1. Copy [examples/action-inventory.csv](examples/action-inventory.csv) and assign an owner to each proposed action.
2. Complete [CHECKLIST.md](CHECKLIST.md) with evidence links and dates.
3. Follow the [readiness guide](docs/webmcp-readiness-guide.md) and [browser verification workflow](docs/verification-workflow.md).
4. Review [common mistakes](docs/common-implementation-mistakes.md), then resolve every release blocker.
5. Use the [evidence review script](examples/README.md) to report missing evidence in your local assessment JSON.

## What does “ready” mean here?

| Stage | Required evidence | What it does not prove |
| --- | --- | --- |
| Candidate | Visible function, inputs, access classification, owner | Registered tools or compatible agents |
| Contracted | Validated inputs, minimized outputs, errors, lifecycle | Correct runtime behavior |
| Browser verified | Tool discovery and execution, dated environment, negative cases | Other browser/agent combinations |
| Pilot approved | Security review, confirmation tests, rollback and monitoring | General availability or ranking benefit |

There is no percentage score that can compensate for missing authorization or failed confirmation. Track each gate as pass, fail, not tested, or not applicable with a reason. A pass is bounded by its evidence.

## Current API and browser requirements

Reviewed 19 November 2026 against the [13 November WebMCP draft](https://webmachinelearning.github.io/webmcp/). This community-group draft is experimental and is not a W3C Standard. Its JavaScript surface is `document.modelContext`, asynchronous `registerTool`, and registration cleanup through an AbortSignal. Chrome implementations and older examples may use another API revision. Record the actual browser, flags or trial, and observed API before assessing compatibility. A polyfill test does not prove browser-agent interoperability.

The draft interface requires a secure context. Test on HTTPS or a supported trustworthy localhost origin. Chrome's current guide describes an origin trial from Chrome 149 and a local WebMCP testing flag; neither implies availability in every browser or agent. Use the actual runtime instructions in the linked guide.

## Planning example

The [WebMCPly website action discovery walkthrough](https://webmcply.com/product/scanner) illustrates how observations become candidate actions. It is a fictional-data product preview, not an operational public scanner or proof of registered tools. Use its planning distinction, then collect browser evidence for your own implementation.

## Related resources

- [Security checklist](https://github.com/raghav453/webmcp-security-checklist) for threat review and release tests.
- [Action examples](https://github.com/raghav453/webmcp-action-examples) for reusable implementation patterns.

## Sources and maintenance

- [Current WebMCP draft](https://webmachinelearning.github.io/webmcp/) — normative proposal text, interfaces, lifecycle, and security considerations.
- [Chrome WebMCP guide](https://developer.chrome.com/docs/ai/webmcp) — browser implementation, origin trial, local testing, and declarative forms; check its revision independently of the draft.
- [Chrome best practices](https://developer.chrome.com/docs/ai/webmcp/best-practices) — tool design and implementation guidance.
- [Agent security guidance](https://developer.chrome.com/docs/agents/security) — threats and boundaries when agents act on web content.

Corrections and reproducible cases are welcome under [CONTRIBUTING.md](CONTRIBUTING.md). See [MAINTENANCE.md](MAINTENANCE.md) for the compatibility review process. Original content and examples are MIT licensed.

Maintained by WebMCPly contributors. WebMCPly is developing a platform for structured website actions and is in pre-launch. [Project information and early access](https://webmcply.com/). This resource is independent community work and carries no standards-body or browser-vendor endorsement.
