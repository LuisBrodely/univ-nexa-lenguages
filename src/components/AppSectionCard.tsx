import {
  Pressable,
  StyleSheet,
  TextInputProps,
  View,
  Text,
  PressableProps,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Icon, ProgressBar } from "react-native-paper";

interface AppSectionCardProps {
  onPress: () => void;
  onLongPress: () => void;
  iconSource: string;
  theme: "primary" | "secondary";
  questions: number;
  successes?: number;
  title: string;
}

const AppSectionCard = ({
  onPress,
  onLongPress,
  iconSource,
  questions,
  successes,
  theme,
  title
}: AppSectionCardProps) => {
  return (
    <Pressable
      onLongPress={successes ? onLongPress : null}
      onPress={!successes ? onPress : null}
      style={{
        ...styles.container,
        backgroundColor:
          theme === "primary" ? Colors.primary : Colors.secondary,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Icon
            source={iconSource}
            size={24}
            color={theme === "primary" ? Colors.secondary : Colors.primary}
          />
          <Text
            style={{
              ...styles.text,
              color: theme === "primary" ? Colors.secondary : Colors.primary,
            }}
          >
            {title}
          </Text>
        </View>
        <Icon
          source="chevron-right"
          size={24}
          color={theme === "primary" ? Colors.secondary : Colors.primary}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              ...styles.title,
              color: theme === "primary" ? Colors.secondary : Colors.primary,
            }}
          >
            {successes ? successes : 0}
          </Text>
          <Text
            style={{
              ...styles.subtitle,
              color: theme === "primary" ? Colors.secondaryC : Colors.primaryC,
            }}
          >
            /{questions} reviews
          </Text>
        </View>
        <Text
          style={{
            ...styles.text,
            color: theme === "primary" ? Colors.secondary : Colors.primary,
          }}
        >
          {successes ? questions - successes : 0}{" "}
          {successes == 1 ? "mistake" : "mistakes"}
        </Text>
      </View>
      <ProgressBar
        progress={(successes ? successes : 0) / questions}
        color={theme === "primary" ? Colors.secondary : Colors.primary}
        style={{
          backgroundColor:
            theme === "primary" ? Colors.secondaryC : Colors.primaryC,
        }}
      />
    </Pressable>
  );
};

export default AppSectionCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    gap: 22,
    paddingVertical: 26,
    paddingHorizontal: 26,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  title: {
    fontSize: 26,
    marginRight: 2,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "400",
  },
});
