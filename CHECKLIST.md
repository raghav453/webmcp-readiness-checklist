# Evidence-based release checklist

Assessment: action name / owner / commit / date / environment / scope.

For every item record **pass, fail, not tested, or not applicable**, an evidence location, reviewer and date. Do not check a box merely because a plan exists. “Not applicable” needs a written reason. Authentication, authorization and confirmation failures block a pilot even when all other items pass.

## 1. Scope and compatibility

- [ ] Describe the user's task and one measurable successful outcome.
- [ ] Inventory the existing UI or application service; name its owner and data source.
- [ ] Classify the action as public/protected and read-only/mutating/consequential.
- [ ] Record the API revision, browser version, agent/caller, origin and trial/flag/polyfill status.
- [ ] Verify secure-context availability and feature detection; unsupported environments receive an honest fallback.
- [ ] Choose declarative forms or imperative registration based on actual supported behavior, not framework preference alone.

## 2. Tool contract

- [ ] Use a unique task-oriented name and a factual description of effects and limits.
- [ ] Inventory required inputs; express types, enums, length/range bounds and unknown-property policy.
- [ ] Enforce the same rules inside the handler and server; schema hints alone are insufficient.
- [ ] Define an output shape with stable identifiers, source and freshness where useful.
- [ ] Minimize result fields; omit session tokens, private account fields and hidden internal metadata.
- [ ] Distinguish empty results from validation, permission, cancellation and transient failures.
- [ ] Set truthful annotations; readOnlyHint is a hint, not enforcement.

## 3. Access and human control

- [ ] Reuse the application's authentication; define expired-session behavior.
- [ ] Authorize each resource and operation on the server at execution time.
- [ ] Test another account's identifier, revoked access and login/logout transitions.
- [ ] Require the appropriate human confirmation for consequential operations.
- [ ] Show the exact proposed change before confirmation; reject stale or changed proposals.
- [ ] Keep passwords, payment secrets and sensitive authentication widgets outside tool inputs.
- [ ] Design replay/idempotency, rate limits and recovery before exposing mutations.

## 4. Lifecycle and runtime verification

- [ ] Await registration and surface rejection; register only after the handler's dependencies are ready.
- [ ] Tie registration to an AbortController; clean up on route teardown and access changes.
- [ ] Propagate execution cancellation into fetches and pending user interactions.
- [ ] Discover the actual registered tool; check name, schema, origin and window context.
- [ ] Execute through the supported tool interface and compare the returned result with expected data.
- [ ] Verify UI state changes and distinguish the execution path from a manual button click.
- [ ] Test valid input, invalid input, empty results, repeated execution and cancellation.
- [ ] Verify teardown removes discovery; re-entry creates one registration without duplicates.

## 5. Pilot and maintenance

- [ ] Complete the companion security review and resolve all blockers.
- [ ] Preserve keyboard access, visible status and the manual UI fallback.
- [ ] Log minimal operation/result evidence without raw secrets or unnecessary personal input.
- [ ] Define a feature-disable/rollback procedure and a named incident owner.
- [ ] Pilot with a bounded environment and explicit success/failure criteria.
- [ ] Schedule owner-led compatibility and link reviews; record changes and test evidence.

Release decision: **approved for named environment / blocked / not tested**. Include unresolved issues and next review date. A public website crawl cannot close runtime gates.
