import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// overmind
import { useAppState } from "../overmind";

// General screens
import OnboardingScreen from "../screens/GeneralAppScreens/OnboardingScreen";
import AppLoadingScreen from "../screens/GeneralAppScreens/AppLoadingScreen";

// Stock related screens
import ExploreScreen from "../screens/StocksRelatedScreens/ExploreScreen";
import StockDetailsScreen from "../screens/StocksRelatedScreens/StockDetailsScreen";

export type RootStackParamList = {
  Explore: undefined;
  StockDetails: {
    stockTicker: string;
    stockName: string;
  };
  Onboarding: undefined;
  AppLoading: undefined;
};

const AppStack = createNativeStackNavigator();
const AppStackNavigator = () => {
  const { isIntroSeen } = useAppState();
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {!isIntroSeen ? (
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        <>
          <AppStack.Screen name="AppLoading" component={AppLoadingScreen} />
          <AppStack.Screen name="Explore" component={ExploreScreen} />
          <AppStack.Screen name="StockDetails" component={StockDetailsScreen} />
        </>
      )}
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
