import {parse, GradientNode} from 'gradient-parser';

export function parseGradient(value: string) {
  let gradientNodes: undefined | GradientNode[];
  // parse
  try {
    gradientNodes = parse(value);
  } catch (error) {}
  if (!gradientNodes) return;
  const gradientNode = gradientNodes[0];
  // process
  const type = ~gradientNode.type.indexOf('radial') ? 'radial' : 'linear';
  let direction = 'center';
  if (gradientNode.orientation) {
    const orientation = gradientNode.orientation as any;
    if (orientation.type === 'angular') {
      const angle = orientation.value;
      if (angle >= 0 && angle < 45) {
        direction = 'top';
      } else if (angle >= 45 && angle < 135) {
        direction = 'right';
      } else if (angle >= 135 && angle < 225) {
        direction = 'bottom';
      } else if (angle >= 225 && angle < 315) {
        direction = 'left';
      } else {
        direction = 'top';
      }
    } else if (orientation.type === 'directional') {
      direction = orientation.value;
    }
  }
  const handlers = gradientNode.colorStops.map(({type, value, length}) => {
    const color = type === 'hex' ? `#${value}` : value;
    return {color, position: +(length?.value || 0)};
  });
  // result
  return {type, direction, handlers};
}
