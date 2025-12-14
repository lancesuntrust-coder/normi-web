export type FeedbackId = string;
export interface FeedbackSummary {
  id: FeedbackId;
  positives: string[];
  suggestions: string[];
}
