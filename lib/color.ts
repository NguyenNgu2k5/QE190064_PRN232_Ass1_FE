export type Hsv = { h: number; s: number; v: number };

export function hexToHsv(hex: string): Hsv {
  const safe = /^#[\da-f]{6}$/i.test(hex) ? hex : "#3B82F6";
  const [r, g, b] = [1, 3, 5].map((index) => Number.parseInt(safe.slice(index, index + 2), 16) / 255);
  const max = Math.max(r, g, b); const min = Math.min(r, g, b); const delta = max - min;
  let h = 0;
  if (delta && max === r) h = 60 * (((g - b) / delta) % 6);
  else if (delta && max === g) h = 60 * ((b - r) / delta + 2);
  else if (delta) h = 60 * ((r - g) / delta + 4);
  return { h: h < 0 ? h + 360 : h, s: max ? delta / max : 0, v: max };
}

export function hsvToHex({ h, s, v }: Hsv): string {
  const c = v * s; const x = c * (1 - Math.abs((h / 60) % 2 - 1)); const m = v - c;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return `#${[r, g, b].map((channel) => Math.round((channel + m) * 255).toString(16).padStart(2, "0")).join("")}`.toUpperCase();
}
