# Common implementation mistakes and how to detect them

| Mistake | Detection | Correction |
| --- | --- | --- |
| Calling an old API as though it were the current draft | Compare actual IDL/runtime surface with source date | State the supported revision; migrate deliberately |
| Treating a successful crawl as tool verification | No discovery/execution record accompanies the assessment | Preserve public observations and collect browser evidence separately |
| Ignoring the registration promise | Rejection appears only in console | Await it and expose a failed compatibility state |
| Trusting JSON Schema alone | Direct invalid-handler call succeeds | Validate again at handler and server boundaries |
| Coercing price strings or allowing unlimited queries | NaN, enormous payload or unbounded work reaches lookup | Bound types/ranges and reject unknown fields |
| Using readOnlyHint as a security control | Callback can still mutate the application | Enforce behavior in application code and test effects |
| Closing a review dialog without canceling work | A pending promise later completes | Bind dialog/work cancellation to execution signal |
| Reusing global approval across actions | Changed payload commits under earlier consent | Bind review to exact payload, principal and freshness |
| Relying on hidden buttons for access control | Another user's identifier succeeds | Authorize every operation on the server |
| Leaving registrations alive after logout/navigation | Discovery returns obsolete tools | Abort registration and in-flight operations |
| Logging complete inputs and outputs | Session/private fields appear in diagnostics | Log bounded identifiers and outcomes; redact by design |
| Calling a product prototype operational | Preview uses fictional state and has no registered tools | Label it illustrative and link a separate verified example |

When reporting a failure include the smallest reproducible input, environment and source revision. Never paste production secrets into an issue.
