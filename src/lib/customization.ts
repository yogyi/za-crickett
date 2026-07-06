import type { CustomizationOption } from "@/types";

export function getDefaultCustomizationValue(opt: CustomizationOption): string {
  if (opt.type === "select" && opt.options?.[0]) {
    return opt.options[0];
  }
  if ((opt.type === "range" || opt.type === "number") && opt.min != null) {
    if (opt.max != null) {
      const step = opt.step ?? 1;
      const mid = Math.round((opt.min + opt.max) / 2 / step) * step;
      return String(mid);
    }
    return String(opt.min);
  }
  return "";
}

export function formatCustomizationDisplay(
  id: string,
  value: string,
  unit?: string
): string {
  if (!value) return "";
  const labels: Record<string, string> = {
    weight: "Weight",
    grains: "Grains",
    handle: "Handle",
    engraving: "Engraving",
  };
  const label = labels[id] ?? id;
  if (unit) {
    return `${label}: ${value}${unit === "grains" ? ` ${unit}` : unit}`;
  }
  return `${label}: ${value}`;
}
