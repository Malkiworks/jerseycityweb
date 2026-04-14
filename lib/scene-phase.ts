export type ScenePhase =
  | "hero"
  | "search"
  | "phone"
  | "directions"
  | "portfolio"
  | "services"
  | "about"
  | "contact";

/** Order matches scroll story: discovery → device → visit → proof → offer → trust → action */
export const SCENE_ORDER: ScenePhase[] = [
  "hero",
  "search",
  "phone",
  "directions",
  "portfolio",
  "services",
  "about",
  "contact",
];

export function isScenePhase(s: string): s is ScenePhase {
  return SCENE_ORDER.includes(s as ScenePhase);
}
