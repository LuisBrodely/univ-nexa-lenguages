import React, { useState } from "react";
import { Vibration, Text, View } from "react-native";
import { Avatar, Button, IconButton } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { Option, Question } from "../models/Question";
import useSectionStore from "../store/store";

type Props = NativeStackScreenProps<RootStackParamList, "Question">;

export const QuestionScreen = ({ route, navigation }: Props) => {
  const questions: Question[] = route.params?.questions ?? [];
  const icon: string = route.params?.icon ?? "";
  const section: string = route.params?.section ?? "";
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  ); // Para rastrear la opción seleccionada
  const currentQuestion: Question = questions[currentQuestionIndex];
  const totalQuestions: number = questions.length;
  const { increaseScore } = useSectionStore();

  // Función para manejar el evento de respuesta a una pregunta
  const handleOptionPress = (isCorrect: boolean, index: number) => {
    Vibration.vibrate(20)
    if (!answerSelected) {
      setAnswerSelected(true);
      setSelectedOptionIndex(index); // Guardar el índice de la opción seleccionada

      if (isCorrect) {
        increaseScore(currentQuestion.sectionId);
      }
    }
  };

  // Función para manejar el avance a la siguiente pregunta o resultados
  const handleNext = () => {
    Vibration.vibrate(20)
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnswerSelected(false);
      setSelectedOptionIndex(null); // Restablecer el índice de la opción seleccionada
    } else {
      navigation.navigate("Results", {
        sectionId: currentQuestion.sectionId,
        icon,
        section,
        questions,
      });
    }
  };

  const goToHome = () => {
    Vibration.vibrate(20)
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingVertical: 24,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <IconButton icon="chevron-left" size={32} onPress={goToHome} />
        {answerSelected && (
          <IconButton
            icon="chevron-right"
            mode="contained"
            containerColor={Colors.secondary}
            iconColor={Colors.secondaryC}
            size={32}
            onPress={handleNext}
          />
        )}
      </View>

      <View style={{ marginTop: 24 }}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 4,
            color: Colors.gray,
            textAlign: "center",
          }}
        >
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </Text>
        <Text
          style={{
            fontSize: 38,
            marginBottom: 8,
            fontWeight: "500",
            color: Colors.text,
            textAlign: "center",
          }}
        >
          {currentQuestion.questionText}
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 16,
          }}
        >
          {currentQuestion.img && <Avatar.Image size={200} source={{ uri: currentQuestion.img }} />}
          {currentQuestion.icon && <Avatar.Icon size={200} icon={currentQuestion.icon} />}
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "500",
            color: Colors.primaryC,
            marginBottom: 28,
            textAlign: "center",
          }}
        >
          {currentQuestion.explanation}
        </Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View style={{ flex: 1 }}>
            {currentQuestion.options
              .slice(0, 2)
              .map((option: Option, index: number) => (
                <Button
                  key={option.id}
                  mode="contained"
                  buttonColor={
                    selectedOptionIndex === index && option.isCorrect
                      ? Colors.secondaryC
                      : Colors.primary
                  }
                  onPress={() => handleOptionPress(option.isCorrect, index)}
                  style={{
                    marginBottom: 14,
                    justifyContent: "center",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    borderRadius: 40,
                  }}
                >
                  {option.text}
                </Button>
              ))}
          </View>
          <View style={{ flex: 1 }}>
            {currentQuestion.options
              .slice(2, 4)
              .map((option: Option, index: number) => (
                <Button
                  key={option.id}
                  mode="contained"
                  buttonColor={
                    selectedOptionIndex === index + 2 && option.isCorrect
                      ? Colors.secondaryC
                      : Colors.primary
                  }
                  onPress={() => handleOptionPress(option.isCorrect, index + 2)}
                  style={{
                    marginBottom: 14,
                    justifyContent: "center",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    borderRadius: 40,
                  }}
                >
                  {option.text}
                </Button>
              ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
