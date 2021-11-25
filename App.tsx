import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useActions } from "./src/overmind/index";
import AppStackNavigator from "./src/navigator";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const { initializarions } = useActions();
  useEffect(() => {
    async function prepare() {
      try {
        await initializarions();
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.log(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
      <FlashMessage position="top" duration={4000} floating />
    </SafeAreaProvider>
  );
}
