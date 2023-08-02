import * as chroma from 'chroma-js';

export function buildColorVariants(baseColor: string) {
  const color = chroma(baseColor);
  const base = color.hex();
  const baseRGB = color.rgb().join(',');
  const contrast = color.luminance() > 0.5 ? '#000000' : '#ffffff';
  const contrastRGB = chroma(contrast).rgb().join(',');
  const shade = color.darken(1).hex();
  const tint = color.brighten(1).hex();
  return {
    base,
    baseRGB,
    contrast,
    contrastRGB,
    shade,
    tint,
  };
}
