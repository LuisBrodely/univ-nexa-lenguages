import React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Avatar, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AppSectionCard from '../components/AppSectionCard';
import useSectionStore from "../store/store";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  // Obtén las secciones del estado usando el hook useSectionStore
  const sections = useSectionStore(state => state.sections);

  return (
    <SafeAreaView style={{
      paddingHorizontal: 20,
      paddingVertical: 24
    }}>
      {/* Contenido del encabezado */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Avatar.Image
          size={36}
          source={require("../../assets/me.jpg")}
        />
        <IconButton
          icon="menu"
          size={32}
          onPress={() => console.log('Pressed')}
        />
      </View>

      {/* Saludo y título */}
      <View
        style={{
          marginTop: 18
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 4, color: Colors.gray }}>Hi, Brodely!</Text>
        <Text style={{ fontSize: 38, fontWeight: "500", color: Colors.text }}>Your tasks for today</Text>
      </View>

      {/* Renderizar las secciones */}
      <View
        style={{
          marginTop: 24,
          gap: 14
        }}
      >
        {sections.map((section, index) => (
          <AppSectionCard 
            key={section.id}
            title={section.section}
            onPress={() => navigation.navigate("Question", { 
              questions: section.questions,
              icon: section.icon,
              section: section.section
            })}
            onLongPress={
              () => navigation.navigate("Results", { 
                icon: section.icon,
                section: section.section,
                sectionId: section.id,
                questions: section.questions
              })
            }
            successes={useSectionStore((state) => state.getSectionScore(section.id))}
            iconSource={section.icon}
            questions={section.questions.length}
            theme={section.id % 2 == 0 ? 'primary' : 'secondary'}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};