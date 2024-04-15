import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Button, Icon } from "react-native-paper";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export const WelcomeScreen = ({ navigation: { navigate } }: Props) => {
  return (
    <SafeAreaView style={{
      paddingHorizontal: 12,
      paddingVertical: 24,
    }}>
      <View>
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            marginTop: 120,
          }}
        >
          <View style={{ alignItems: "center", flexDirection: 'row' }}>
            <Icon
              source='message-bookmark'
              size={32}
              color={Colors.secondaryC}
            />
            <Text
              style={{
                marginLeft: 6,
                marginTop: -6,
                fontSize: 18,
                fontWeight: '600',
                color: Colors.text
              }}
            >
              Nexa Lenguages
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 20, marginVertical: 28, width: '80%'}}>
          <Text style={{ fontWeight: "800", fontSize: 62, marginBottom: 26}}>
            Aprende{' '}
            <Text style={{color: Colors.secondaryC}}>Ingles{' '}</Text>
            de Forma{' '}
            <Text style={{color: Colors.primaryC}}>Divertida</Text>
          </Text>
          <Text style={{ fontSize: 18, marginBottom: 4, color: Colors.gray }}>
            Descubre una nueva experiencia con nuestra app. ¡Explora, aprende y disfruta!
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20, 
            marginTop: 20,
            gap: 8
          }}
        >
          <Button
            mode="contained"
            buttonColor={Colors.primary}
            onPress={() => navigate('Login')}
          >
            <Text style={{fontSize: 18}}>Iniciar sesión</Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={Colors.primaryC}
            onPress={() => navigate('Register')}
          >
            <Text style={{fontSize: 18}}>Registrarme</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
