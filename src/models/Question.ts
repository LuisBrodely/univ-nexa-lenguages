export interface Question  {
  id: number;
  sectionId: number;
  questionText: string;
  options: Option[];
  explanation: string;

};

export interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}