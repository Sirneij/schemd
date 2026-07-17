/**
 * Stable public entry point for the `schemd` server-side compiler.
 *
 * All runtime exports are dependency-free and safe to run without a DOM.
 *
 * @packageDocumentation
 */
export { parseSchematic, parseSchematicColor, parseSchematicFence } from './parser.js';
export { renderSchematic } from './renderer.js';
export {
	compileSchematic,
	type SchematicCompilation,
	type SchematicCompilationMetrics
} from './compiler.js';
export {
	mathLabelGlyphLength,
	mathLabelTextWidth,
	mathLabelText,
	parseMathLabel,
	renderMathLabelTspans,
	type MathLabelSegment,
	type MathLabelSegmentKind
} from './math-label.js';
export {
	MAX_SCHEMATIC_COMPONENTS,
	MAX_SCHEMATIC_CONNECTIONS,
	MAX_SCHEMATIC_WIRE_CROSSINGS,
	MAX_SCHEMATIC_SOURCE_CHARACTERS,
	MAX_SCHEMATIC_SVG_OUTPUT_BYTES,
	SCHEMATIC_LIMITS
} from './limits.js';
export {
	classicalGateHeight,
	componentObstacleRectangle,
	componentRectangle,
	componentTextAnchors,
	distributedCoordinate,
	enumerateComponentPorts,
	positionIcPin,
	PORT_HOTSPOT_RADIUS,
	resolvePortPoint,
	resolvePortGeometry,
	routeConnections,
	routeConnection,
	SCHEMATIC_BRIDGE_RADIUS,
	SCHEMATIC_OBSTACLE_CLEARANCE,
	validateDocumentGeometry,
	type RoutedConnection,
	type ComponentTextAnchors,
	type ComponentPort,
	type IcPinSide,
	type SchematicRectangle
} from './layout.js';
export {
	ANALOG_KINDS,
	COMPONENT_KINDS,
	CLASSICAL_GATE_KINDS,
	DIODE_TYPES,
	GROUND_STYLES,
	PASSIVE_KINDS,
	QUANTUM_GATE_KINDS,
	SCHEMATIC_SIGNAL_MARKERS,
	SEMANTIC_COLORS,
	TRANSISTOR_TYPES,
	UML_COMPONENT_KINDS,
	UML_RELATION_KINDS,
	SCHEMD_OUTPUT_MODES,
	SCHEMD_SEMANTIC_HOOKS,
	SchematicSyntaxError,
	type AnalogKind,
	type CompileSchematicOptions,
	type ClassicalGateComponent,
	type ClassicalGateKind,
	type ComponentKind,
	type DiodeComponent,
	type DiodeType,
	type GroundComponent,
	type GroundStyle,
	type IcComponent,
	type IntegratedCircuitComponent,
	type IntegratedCircuitPins,
	type PassiveComponent,
	type PassiveKind,
	type PortComponent,
	type SemanticColor,
	type SchematicBounds,
	type SchematicComponent,
	type SchematicConnection,
	type SchematicColor,
	type SchematicDocument,
	type SchematicEndpoint,
	type SchematicFence,
	type SchematicSignalMarker,
	type SchematicSemanticHook,
	type SchematicPoint,
	type SchemdOutputMode,
	type TransistorComponent,
	type TransistorType,
	type QuantumGateComponent,
	type QuantumGateKind,
	type SchematicRelationKind,
	type UmlActorComponent,
	type UmlClassComponent,
	type UmlComponent,
	type UmlComponentKind,
	type UmlPseudostateComponent,
	type UmlRelationKind,
	type UmlSizedComponent,
	type UmlStateComponent
} from './types.js';
