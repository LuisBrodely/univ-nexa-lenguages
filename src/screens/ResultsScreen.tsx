import React, { useState } from "react";
import { Text, View } from "react-native";
import { Icon, IconButton, Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import useSectionStore from "../store/store";
import PieChart from 'react-native-pie-chart'
import { Question } from "../models/Question";
import Spacing from "../constants/Spacing";
import { TouchableOpacity } from "react-native";


type Props = NativeStackScreenProps<RootStackParamList, "Results">;

export const ResultsScreen = ({ route, navigation: { navigate } }: Props) => {
  const sectionId: number = route.params?.sectionId;
  const questions: Question[] = route.params?.questions;
  const section: string = route.params?.section;
  const icon: string = route.params?.icon;
  const sectionScore = useSectionStore((state) => state.getSectionScore(sectionId));

  const widthAndHeight = 250
  const series = [sectionScore, questions.length - sectionScore]
  const sliceColor = sectionId % 2 == 0 ? [Colors.primary, Colors.secondaryC] : [Colors.primaryC, Colors.secondary] 

  const resetScore = () => {
    useSectionStore.getState().resetSectionScore(sectionId);
    navigate('Home');
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingVertical: 24,
      }}
    > 
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <IconButton icon="chevron-left" size={32} onPress={() => navigate('Home')} />
      </View>
      {/* Mostrar la pregunta actual */}
      <View style={{ marginTop: 24 }}>
        {/* Saludo y título */}
        <Text style={{ fontSize: 18, marginBottom: 4, color: Colors.gray, textAlign: "center" }}>
          Results section {section}
        </Text>
        <Text style={{ fontSize: 38, marginBottom: 8, fontWeight: "500", color: Colors.text, textAlign: "center" }}>
          Section Score {sectionScore}/{questions.length}
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.75}
          coverFill={'#FFF'}
        />
        <View style={{ position: "absolute" }}>
          <Icon
            source={icon}
            size={100}
            color={sectionId % 2 == 0 ? Colors.primary : Colors.primaryC}
          />
        </View>
      </View>
      <View>
        <Button
          mode="contained"
          buttonColor={Colors.primaryC}
          icon="repeat"
          labelStyle={{ fontSize: 18 }}
          style={{ marginTop: 140, paddingVertical: 8, justifyContent: "center" }}
          contentStyle={{ flexDirection: 'row-reverse' }} 
          onPress={resetScore}
        >
          Repetir
        </Button>
        <Button
          mode="contained"
          buttonColor={Colors.secondary}
          textColor={Colors.text}
          labelStyle={{ fontSize: 18 }}
          style={{ marginTop: 20, paddingVertical: 8, justifyContent: "center" }}
          onPress={() => navigate('Home')}
          contentStyle={{ flexDirection: 'row-reverse' }} 
          icon="home"
        >
          Regresar al inicio
        </Button>
      </View>
    </SafeAreaView>
  );
};
