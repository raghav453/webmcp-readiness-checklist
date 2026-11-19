# Testing WebMCP registration, execution and confirmation

This workflow produces evidence for one action and one environment. It separates four claims: a usable UI, an available API, a registered tool, and a successful tool invocation.

## 1. Record the test environment

Capture commit, browser/version, OS, secure origin, enabled flag or trial, agent/caller version and API surface. Use a clean profile without production credentials. For polyfill runs record its exact version and mark the run as polyfill. A native test must run without injecting a polyfill or replacing the API.

## 2. Check API and registration

For the 13 November draft, inspect document.modelContext and its registerTool/getTools/executeTool methods. Await the registration promise. Record a rejection as a failure with a sanitized message. Use supported inspection tools from the Chrome guide for Chrome's actual implementation; do not assume draft console commands apply to an older runtime.

Discover the tool in the relevant origin/window and compare its name, description and schema with the intended contract. A handler stored in an application array or a unit-test mock is not browser registration evidence. The presence of a form attribute is not discovery evidence.

## 3. Exercise the tool interface

For a draft-compatible runtime, await getTools(), select the discovered RegisteredTool by name and expected origin, then pass that object and a valid input to executeTool(). Record the returned string and decode it only if the handler's documented serialization supports that format. Compare stable fields with an independently known fixture or server outcome.

Run the same query through the manual UI and check parity, but record it as a separate execution path. For each run retain tool name, caller path, input fixture identifier, expected outcome, actual outcome and timestamp. Do not retain real personal input.

## 4. Negative tests

| Case | Expected observation |
| --- | --- |
| Wrong type or unknown property | Validation rejection; no lookup/mutation |
| Valid query with no match | Explicit empty result |
| Expired or unauthorized session | Operation refused by application/server |
| Abort before execution | No successful operation |
| Abort while awaiting confirmation | Dialog closes and proposed mutation is discarded |
| Repeated consequential input | Server applies the intended idempotency policy |
| Route teardown or logout | Old registration unavailable; pending work canceled |
| Route re-entry | Exactly one fresh tool registration |

## 5. Verify human control

Invoke the preparation tool using fictional data. Confirm that the user can review, cancel, and change the proposal. Cancellation must not commit anything. Test approval of one exact payload, then alter it and ensure the old approval does not carry over. Test timeout, navigation and session changes while the review is open.

An annotation is not evidence of enforcement. A demo dialog over local fictional state can demonstrate UX control but cannot establish secure server-side confirmation.

## 6. Preserve a bounded result

Use the [assessment JSON](../examples/assessment.sample.json). Store sanitized logs/screenshots separately, link each gate to evidence, and record unresolved cases. Re-run after API, application contract or authorization changes. A passing local test does not certify every agent or production readiness.

- [Current WebMCP draft](https://webmachinelearning.github.io/webmcp/) — normative proposal text, interfaces, lifecycle, and security considerations.
- [Chrome WebMCP guide](https://developer.chrome.com/docs/ai/webmcp) — browser implementation, origin trial, local testing, and declarative forms; check its revision independently of the draft.
- [Chrome best practices](https://developer.chrome.com/docs/ai/webmcp/best-practices) — tool design and implementation guidance.
- [Agent security guidance](https://developer.chrome.com/docs/agents/security) — threats and boundaries when agents act on web content.
