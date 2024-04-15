/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { QuestionScreen } from './src/screens/QuestionScreen';
import { Question } from "./src/models/Question";
import { Section } from './src/models/Section';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: { name: string };
  Home: undefined;
  Question: { questions: Question[], icon: string, section: string };
  Results: { icon: string, section: string, sectionId: number, questions: Question[] };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
