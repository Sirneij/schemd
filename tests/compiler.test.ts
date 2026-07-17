import { describe, expect, test } from 'vitest';
import { compileSchematic } from '../src/index.js';

describe('compileSchematic', () => {
	test('returns one validated result with exact UTF-8 metrics', () => {
		const source = 'resistor:R1 "10 k\\Omega" at (80, 80) #amber';
		const result = compileSchematic(source, {
			bounds: { width: 320, height: 160 },
			title: 'Input Ω'
		});

		expect(result.document.components).toHaveLength(1);
		expect(result.svg).toContain('<svg');
		expect(result.metrics).toEqual({
			sourceCharacters: source.length,
			components: 1,
			connections: 0,
			svgBytes: new TextEncoder().encode(result.svg).byteLength
		});
	});
});
