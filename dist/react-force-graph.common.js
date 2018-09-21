'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var fromKapsule = _interopDefault(require('react-kapsule'));
var ForceGraph3DKapsule = _interopDefault(require('3d-force-graph'));
var ForceGraph2DKapsule = _interopDefault(require('force-graph'));

var commonPropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  graphData: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
  backgroundColor: PropTypes.string,
  nodeRelSize: PropTypes.number,
  nodeId: PropTypes.string,
  nodeLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  nodeVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  nodeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  nodeAutoColorBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkSource: PropTypes.string,
  linkTarget: PropTypes.string,
  linkLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkHoverPrecision: PropTypes.number,
  linkColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkAutoColorBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkCurvature: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalArrowLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalArrowColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkDirectionalArrowRelPos: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticles: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  d3AlphaDecay: PropTypes.number,
  d3VelocityDecay: PropTypes.number,
  warmupTicks: PropTypes.number,
  cooldownTicks: PropTypes.number,
  cooldownTime: PropTypes.number,
  onEngineTick: PropTypes.func,
  onEngineStop: PropTypes.func
};

var pointerBasedPropTypes = {
  onNodeClick: PropTypes.func,
  onNodeHover: PropTypes.func,
  onNodeDrag: PropTypes.func,
  onNodeDragEnd: PropTypes.func,
  onLinkClick: PropTypes.func,
  onLinkHover: PropTypes.func,
  enablePointerInteraction: PropTypes.bool,
  enableNodeDrag: PropTypes.bool
};

var threeBasedPropTypes = {
  showNavInfo: PropTypes.bool,
  nodeOpacity: PropTypes.number,
  nodeResolution: PropTypes.number,
  nodeThreeObject: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  linkVisibility: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  linkOpacity: PropTypes.number,
  linkResolution: PropTypes.number,
  linkCurveRotation: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkMaterial: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  linkDirectionalArrowResolution: PropTypes.number,
  linkDirectionalParticleResolution: PropTypes.number,
  forceEngine: PropTypes.oneOf(['d3', 'ngraph']),
  numDimensions: PropTypes.oneOf([1, 2, 3])
};

var ForceGraph2DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, {
  nodeCanvasObject: PropTypes.func,
  enableZoomPanInteraction: PropTypes.bool
});

var ForceGraph3DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, threeBasedPropTypes, {
  enableNavigationControls: PropTypes.bool
});

var ForceGraph3D = fromKapsule(ForceGraph3DKapsule, undefined, [// bind methods
'd3Force', 'stopAnimation', 'cameraPosition', 'scene', 'camera', 'renderer', 'tbControls']);

ForceGraph3D.displayName = 'ForceGraph3D';
ForceGraph3D.propTypes = ForceGraph3DPropTypes;

var ForceGraph2D = fromKapsule(ForceGraph2DKapsule, undefined, ['d3Force', 'stopAnimation', 'centerAt', 'zoom'] // bind methods
);

ForceGraph2D.displayName = 'ForceGraph2D';
ForceGraph2D.propTypes = ForceGraph2DPropTypes;

exports.ForceGraph3D = ForceGraph3D;
exports.ForceGraph2D = ForceGraph2D;
