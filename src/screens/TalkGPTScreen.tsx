import React, { useState } from "react";
import {
  Text,
  View,
  Vibration,
  ScrollView,
  Keyboard,
  TextInput,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Icon, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import axios from "axios";
import { promptSystem, promptUser } from "../prompt/v1";

type Props = NativeStackScreenProps<RootStackParamList, "TalkGPT">;

export const TalkGPTScreen = ({ navigation: { navigate } }: Props) => {
  const [inputText, setInputText] = useState<string>("");
  const [responseText, setResponseText] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const API_KEY = "";

  const sendQuestion = async () => {
    Keyboard.dismiss();
    if (!isLoading) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            messages: [
              { role: "system", content: promptSystem.content },
              {
                role: "user",
                content: `${promptUser.content} '''${inputText}''' `,
              },
            ],
            max_tokens: 400,
            model: "gpt-3.5-turbo",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        console.log(response.data);
        setResponseText(response.data.choices[0].message.content);
      } catch (error) {
        console.error("Error fetching response:", error);
      } finally {
        setIsLoading(false);
        setInputText("");
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingVertical: 24,
        backgroundColor: "#FFFFFF",
        height: "100%",
      }}
    >
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
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 4,
          paddingBottom: 30
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            alignItems: "center",
            flex: 1,
            paddingTop: 24,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "700",
              color: Colors.primary,
            }}
          >
            AI Teacher
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 2,
              color: Colors.gray,
              textAlign: "center",
            }}
          >
            Powered by gpt-3.5-turbo
          </Text>
          {responseText ? (
            <View
              style={{
                marginTop: 32,
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingTop: 20,
                paddingBottom: 16,
                width: "100%",
                borderColor: '#E0E2E3',
                borderWidth: 2
              }}
            >
              <Text>{responseText}</Text>
              <View style={{ alignItems: "flex-end", marginTop: 4 }}>
                <Icon
                  size={20}
                  source="creation"
                  color={Colors.secondaryC}
                ></Icon>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderColor: '#E0E2E3',
            borderWidth: 2,
            borderRadius: 100,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "#FFFFFF",
          }}
          placeholder="Enter your question in Spanish"
          onChangeText={setInputText}
          value={inputText}
        />
        <IconButton
          icon="send-outline"
          size={32}
          iconColor={"#FFFFFF"}
          containerColor={Colors.primary}
          mode="contained"
          onPress={sendQuestion}
          disabled={isLoading}
        />
      </View>
    </SafeAreaView>
  );
};
