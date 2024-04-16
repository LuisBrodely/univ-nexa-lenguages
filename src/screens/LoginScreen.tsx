import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
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

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
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
            color={Colors.primary}
          />
          <Text style={{ fontSize: 38, marginBottom: 4, marginTop: 10, fontWeight: "600", color: Colors.text, textAlign: "center" }}>
            Iniciar Sesión
          </Text>
          <Text style={{ fontSize: 18, marginBottom: 4, color: Colors.gray, textAlign: "center" }}>
            Ingresa tus datos para comenzar
          </Text>
        </View>
        <View
          style={{
            marginTop: 24,
            gap: 6,
          }}
        >
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
        </View>

        <View>
          <Text style={{ fontSize: 18, marginBottom: 6, marginTop: 14, color: Colors.secondaryC, alignSelf: "flex-end" }}>
            ¿Olvidaste tu contraseña?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: 8,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
          onPress={() => {
            navigate("Home")
          }}
        >
          <Text
            style={{
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: 20,
            }}

            >
            Iniciar sesión
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Register")}
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
            Crear una cuenta nueva
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
