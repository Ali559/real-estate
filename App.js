import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./src/views/screens/DetailsScreen";
import HomeScreen from "./src/views/screens/HomeScreen";
import InteriorScreen from "./src/views/screens/InteriorScreen";
import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import { useFonts } from "expo-font";
import UploadScreen from "./src/views/screens/UploadScreen";
const Stack = createStackNavigator();
const App = () => {
  const [fontsLoaded] = useFonts({
    Speda: require("./src/assets/fonts/Speda.ttf"),
    Speda_Bold: require("./src/assets/fonts/Speda_Bold.ttf"),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="OnBoardScreen"
          component={OnBoardScreen}
        ></Stack.Screen>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        {/* <Stack.Screen name="UploadScreen" component={UploadScreen}></Stack.Screen> */}
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="InteriorScreen"
          component={InteriorScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
