/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { QuestionScreen } from "../screens/QuestionScreen";
import { ResultsScreen } from "../screens/ResultsScreen";

import Colors from "../constants/Colors";

import { RootStackParamList } from "../../types";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from "../screens/ProfileScreen";
import { TalkGPTScreen } from "../screens/TalkGPTScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Question" component={QuestionScreen}></Stack.Screen>
      <Stack.Screen name="Results" component={ResultsScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
      <Stack.Screen name="TalkGPT" component={TalkGPTScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
