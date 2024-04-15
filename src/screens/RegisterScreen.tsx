import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import AppTextInput from "../components/AppTextInput";
import { Icon } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;
export const RegisterScreen= ({ navigation: {navigate} }: Props) => {

return (
    <SafeAreaView style={{
      paddingHorizontal: 20,
      height: '100%'
    }}>
      <View style={{ flex: 1, height: '100%', justifyContent: "center" }}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Icon
            source='message-bookmark'
            size={48}
            color={Colors.primaryC}
          />
          <Text style={{ fontSize: 38, marginBottom: 4, marginTop: 10, fontWeight: "600", color: Colors.text, textAlign: "center" }}>
            Registrarme
          </Text>
          <Text style={{ fontSize: 18, marginBottom: 4, color: Colors.gray, textAlign: "center" }}>
            Ingresa tus datos para registrarte
          </Text>
        </View>
        <View
          style={{
            marginTop: 24,
            gap: 6,
          }}
        >
          <AppTextInput placeholder="Correo" />
          <AppTextInput placeholder="Contraseña" />
          <AppTextInput placeholder="Confirmar contraseña" />
        </View>

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primaryC,
            marginVertical: Spacing * 3,
            borderRadius: 8,
            shadowColor: Colors.primaryC,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
          onPress={() => navigate("Home")}
        >
          <Text
            style={{
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: 20,
            }}

            >
            Registrarme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={{
            padding: 12,
          }}
        >
          <Text
            style={{
              color: Colors.text,
              textAlign: "center",
              fontWeight: "500",
              fontSize: 18,
            }}
          >
            Ingresa con una cuenta existente
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};