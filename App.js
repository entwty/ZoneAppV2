const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Loading3 from "./screens/Loading3";
import Messages from "./screens/Messages";
import Like from "./screens/Like";
import Map1 from "./screens/Map1";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import Onboarding4 from "./screens/Onboarding4";
import ProfileFull from "./screens/ProfileFull";
import AllMatches from "./screens/AllMatches";
import Profile1 from "./screens/Profile1";
import Photos from "./screens/Photos";
import IdealMatch from "./screens/IdealMatch";
import SexualOrientation from "./screens/SexualOrientation";
import Gender from "./screens/Gender";
import Passions from "./screens/Passions";
import PlatinumPopUp from "./screens/PlatinumPopUp";
import GoldPopUp from "./screens/GoldPopUp";
import PlusPopUp from "./screens/PlusPopUp";
import FullscreenPhoto from "./screens/FullscreenPhoto";
import Match from "./screens/Match";
import Filter from "./screens/Filter";
import PasswordNotChange from "./screens/PasswordNotChange";
import ChangePassword from "./screens/ChangePassword";
import OTP from "./screens/OTP";
import ForgetYourPassword from "./screens/ForgetYourPassword";
import Pass from "./screens/Pass";
import Like1 from "./screens/Like1";
import SignUpEmail from "./screens/SignUpEmail";
import SignUpPhone from "./screens/SignUpPhone";
import SignUpPhone1 from "./screens/SignUpPhone1";
import ZoneIkonGradient11 from "./components/ZoneIkonGradient11";
import Icon5 from "./components/Icon5";
import Icon4 from "./components/Icon4";
import Icon3 from "./components/Icon3";
import Icon2 from "./components/Icon2";
import Component1Icon1 from "./components/Component1Icon1";
import Component1Icon from "./components/Component1Icon";
import Icon1 from "./components/Icon1";
import Icon from "./components/Icon";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <ZoneIkonGradient11 />,
    <Icon4 />,
    <Icon2 />,
    <Component1Icon />,
    <Icon />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <ZoneIkonGradient11 />,
    <Icon5 />,
    <Icon3 />,
    <Component1Icon1 />,
    <Icon1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View style={{ flexDirection: "row" }}>
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={Map1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="BottomTabsRoot"
                  component={BottomTabsRoot}
                />
                <Stack.Screen
                  name="Loading3"
                  component={Loading3}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Welcome"
                  component={Welcome}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Onboarding4"
                  component={Onboarding4}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ProfileFull"
                  component={ProfileFull}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AllMatches"
                  component={AllMatches}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Profile1"
                  component={Profile1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Photos"
                  component={Photos}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="IdealMatch"
                  component={IdealMatch}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SexualOrientation"
                  component={SexualOrientation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Gender"
                  component={Gender}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Passions"
                  component={Passions}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PlatinumPopUp"
                  component={PlatinumPopUp}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="GoldPopUp"
                  component={GoldPopUp}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PlusPopUp"
                  component={PlusPopUp}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="FullscreenPhoto"
                  component={FullscreenPhoto}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Match"
                  component={Match}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Filter"
                  component={Filter}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PasswordNotChange"
                  component={PasswordNotChange}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ChangePassword"
                  component={ChangePassword}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OTP"
                  component={OTP}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ForgetYourPassword"
                  component={ForgetYourPassword}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Pass"
                  component={Pass}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Like1"
                  component={Like1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SignUpEmail"
                  component={SignUpEmail}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SignUpPhone"
                  component={SignUpPhone}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SignUpPhone1"
                  component={SignUpPhone1}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : (
              <Loading3 />
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};
export default App;
