# From website controls to an action contract

## How do you make a website ready for WebMCP?

Start with a user task whose input and outcome are already understood. Consider a fictional equipment catalogue. A page has a search box and product cards. Public inspection establishes that a human can search and see a price; it does not establish that the browser exposes a tool, that prices are current, or that authenticated catalogue access is authorized.

Build an inventory before writing tool code. Record the UI route, application function, public/protected data, mutation effects, reviewer and evidence. Prefer a narrow read-only search for the first pilot. Defer purchases and account changes until security, confirmation and recovery paths exist.

## A worked contract: search_catalog

| Field | Design decision | Reason |
| --- | --- | --- |
| Task | Find fictional equipment by query and optional price ceiling | A complete user intent, not “click search” |
| Input | query: 1–80 trimmed characters; maxPrice: optional nonnegative number | Bounded work and unambiguous price units |
| Output | items with id, name, price, currency; count; fictionalData flag | Stable selection and clear data provenance |
| Access | Public sample catalogue | No session or private-user fields |
| Effects | None beyond visible search-result rendering | Read-only domain operation; truthful hint |
| Empty result | items: [], count: 0 | An ordinary outcome, not an exception |
| Error | Invalid input rejects before lookup | Bad types are not silently coerced |
| Lifecycle | Register on page readiness, abort on teardown | Prevent stale tools and duplicated registration |

Write the input schema, then independently validate the handler's inputs. A schema is a contract presented to callers, not a replacement for a boundary check. Specify whether prices use major currency units or integer minor units, and keep that consistent. For a real catalogue, return the server's authoritative price and freshness rather than a scraped display string.

## Declarative or imperative?

Declarative WebMCP uses browser-recognized form attributes in implementations that support them. It can suit existing validated forms with a coherent submission outcome. Imperative tools register a callback and schema; they suit application logic, custom data flows and lifecycle control. The current draft's JavaScript API and Chrome's declarative implementation are related, but their compatibility must be evaluated separately. Adding toolname to arbitrary HTML does not prove discovery.

Do not register both representations under the same name or expose duplicate actions without an intentional design. With React, Vue, Angular or another router, register after dependencies are ready and remove the tool when its page or authorization context ends. UI component cleanup should also cancel pending work.

## Protected and consequential tasks

For “prepare support request,” let the tool validate and display a draft. Show the human the exact text, recipient and effect. Sending is a separate boundary. Never accept an input such as confirmed: true as proof of a human decision. A real service must authorize the operation, bind confirmation to the reviewed payload and session, and handle duplicate submissions atomically.

For each protected action, test the same request as an authorized user, an unauthorized user, after session expiry, and after permission revocation. Hidden buttons and tool discovery filters are not server authorization.

## When can the team pilot it?

Close every runtime gate in the [verification workflow](verification-workflow.md), then use the [release checklist](../CHECKLIST.md). Record limitations instead of converting untested cases into passes. Maintain a rollback that disables registration and the affected server operation when necessary; merely hiding a form may leave a stale caller active.

Reviewed 19 November 2026 against the [13 November WebMCP draft](https://webmachinelearning.github.io/webmcp/). This community-group draft is experimental and is not a W3C Standard. Its JavaScript surface is `document.modelContext`, asynchronous `registerTool`, and registration cleanup through an AbortSignal. Chrome implementations and older examples may use another API revision. Record the actual browser, flags or trial, and observed API before assessing compatibility. A polyfill test does not prove browser-agent interoperability.

- [Current WebMCP draft](https://webmachinelearning.github.io/webmcp/) — normative proposal text, interfaces, lifecycle, and security considerations.
- [Chrome WebMCP guide](https://developer.chrome.com/docs/ai/webmcp) — browser implementation, origin trial, local testing, and declarative forms; check its revision independently of the draft.
- [Chrome best practices](https://developer.chrome.com/docs/ai/webmcp/best-practices) — tool design and implementation guidance.
- [Agent security guidance](https://developer.chrome.com/docs/agents/security) — threats and boundaries when agents act on web content.
