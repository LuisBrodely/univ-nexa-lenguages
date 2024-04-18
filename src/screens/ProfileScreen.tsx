import React from "react";
import { ScrollView, Text, Vibration, View } from "react-native";
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import {
  Avatar,
  Button,
  Icon,
  IconButton,
  ProgressBar,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AppSectionCard from "../components/AppSectionCard";
import useSectionStore from "../store/store";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export const ProfileScreen = ({ navigation: { navigate } }: Props) => {
  // Obtén las secciones del estado usando el hook useSectionStore
  const sections = useSectionStore((state) => state.sections);

  const resetScore = (sectionId: number) => {
    useSectionStore.getState().resetSectionScore(sectionId);
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingVertical: 24,
      }}
    >
      {/* Contenido del encabezado */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="chevron-left"
          size={32}
          onPress={() => {
            Vibration.vibrate(20);
            navigate("Home");
          }}
        />
        <IconButton
          icon="logout"
          iconColor={'#FF9393'}
          size={32}
          onPress={() => {
            Vibration.vibrate(20);
            navigate("Login");
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Saludo y título */}
        <View
          style={{
            marginTop: 18,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 16
          }}
        >
          <Avatar.Icon size={120} icon='account' />
          <Text
            style={{
              fontSize: 38,
              marginTop: 8,
              fontWeight: "500",
              color: Colors.text,
            }}
          >
            Brodely Tovar
          </Text>
          <Text style={{ fontSize: 18, marginTop: 4, color: Colors.gray }}>
            luisbrodely2@gmail.com
          </Text>
        </View>
        {/* Renderizar las secciones */}
        <View
          style={{
            marginTop: 24,
            gap: 36,
            marginHorizontal: 10,
          }}
        >
          {sections.map((section, index) => (
            <View key={section.id}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 6,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    marginTop: 4,
                    marginBottom: 16,
                  }}
                >
                  <Icon
                    source={section.icon}
                    size={32}
                    color={
                      section.id % 2 == 0 ? Colors.primaryC : Colors.primary
                    }
                  />
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>
                    {section.section}
                  </Text>
                </View>
                <Text style={{ fontSize: 24, fontWeight: "500" }}>
                  <Text
                    style={{
                      color:
                        section.id % 2 == 0 ? Colors.primaryC : Colors.primary,
                    }}
                  >
                    {section.score}
                  </Text>
                  <Text
                    style={{
                      color:
                        section.id % 2 != 0
                          ? Colors.secondaryC
                          : Colors.secondary,
                    }}
                  >
                    /{section.questions.length}
                  </Text>
                </Text>
              </View>
              <ProgressBar
                key={section.id}
                progress={section.score / section.questions.length}
                color={section.id % 2 == 0 ? Colors.primaryC : Colors.primary}
                style={{
                  backgroundColor:
                    section.id % 2 != 0 ? Colors.secondaryC : Colors.secondary,
                  marginBottom: 16,
                }}
              />
              <Button
                mode="contained"
                buttonColor={
                  section.id % 2 == 0 ? Colors.primaryC : Colors.primary
                }
                onPress={() => {
                  resetScore(section.id);
                }}
              >
                Reiniciar
              </Button>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
