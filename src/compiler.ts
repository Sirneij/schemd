/** One-pass compiler facade for hosts that do not need the parser and renderer separately. */
import { utf8ByteLength } from './limits.js';
import { parseSchematic } from './parser.js';
import { renderSchematic } from './renderer.js';
import type { CompileSchematicOptions, SchematicDocument } from './types.js';

/** Small, allocation-bounded compilation counters. */
export interface SchematicCompilationMetrics {
	readonly sourceCharacters: number;
	readonly components: number;
	readonly connections: number;
	readonly svgBytes: number;
}

/** Validated AST, rendered SVG, and useful host-side counters. */
export interface SchematicCompilation {
	readonly document: SchematicDocument;
	readonly svg: string;
	readonly metrics: SchematicCompilationMetrics;
}

/** Parse and render a schematic with one stable public call. */
export function compileSchematic(source: string, options: CompileSchematicOptions): SchematicCompilation {
	const document = parseSchematic(source, options);
	const svg = renderSchematic(document, options);
	return {
		document,
		svg,
		metrics: {
			sourceCharacters: source.length,
			components: document.components.length,
			connections: document.connections.length,
			svgBytes: utf8ByteLength(svg)
		}
	};
}
