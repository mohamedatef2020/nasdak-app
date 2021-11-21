import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// General screens
import OnboardingScreen from "../screens/GeneralAppScreens/OnboardingScreen";

// Stock related screens
import ExploreScreen from "../screens/StocksRelatedScreens/ExploreScreen";
import StockDetailsScreen from "../screens/StocksRelatedScreens/StockDetailsScreen";

export type RootStackParamList = {
  Explore: undefined;
  StockDetails: undefined;
  Onboarding: undefined;
};

const AppStack = createNativeStackNavigator();
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AppStack.Screen name="Explore" component={ExploreScreen} />
      <AppStack.Screen name="StockDetails" component={StockDetailsScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
