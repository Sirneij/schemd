# Performance and size

The release gate bundles the public compiler entry with Vite, minifies it for ES2022, and gzips at level 9. `bun run size` fails above exactly 30,720 B. The current audited build measures 91,062 B minified and 26,435 B gzip.

The compiler has zero runtime dependencies. Parsing and rendering are bounded by exported resource limits. Orthogonal routing uses deterministic obstacle geometry, a one-channel fast path, cached document routes, sparse fallback search, and a hard state ceiling. Route-cache identity does not serialize the document or duplicate derived orientation state.

Run the reproducible local matrix after a build:

```sh
bun run benchmark
```

It reports median latency and SVG bytes for a representative compile, the 512-component ceiling, a dense 16-by-16 crossing fixture, and repeated-symbol output. On Node.js 26.4.0 / Apple Silicon, the audited build measured 0.202 ms / 6,038 B, 4.638 ms / 279,243 B, and 2.389 ms / 44,604 B for those three workloads. Timing is machine-specific; byte measurements are deterministic for the audited source.

Generated output is guarded by regression fixtures: an individual unused family contributes zero bytes, rotation is an instance transform, and repeated canonical components amortize their vector definition.
