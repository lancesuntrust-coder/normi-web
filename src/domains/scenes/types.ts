// Types for scenes domain
export type SceneId = string;
export interface SceneSummary {
  id: SceneId;
  title: string;
  description?: string;
}
