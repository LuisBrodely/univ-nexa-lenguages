import { Question } from "./Question";

export interface Section {
  id: number;
  section: string;
  icon: string;
  questions: Question[];
}
