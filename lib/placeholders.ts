/** Deterministic placeholder images (picsum.photos) for demos until real assets exist. */

const BASE = "https://picsum.photos";

export function projectPlaceholderImage(
  projectId: string,
  width = 640,
  height = 360
): string {
  return `${BASE}/seed/proj-${encodeURIComponent(projectId)}/${width}/${height}`;
}
