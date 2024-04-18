export interface Question  {
  id: number;
  sectionId: number;
  img?: string;
  questionText: string;
  options: Option[];
  explanation: string;
  icon?: string;
};

export interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}