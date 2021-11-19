import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import ExploreScreen from "../screens/StocksRelatedScreens/ExploreScreen";
import StockDetailsScreen from "../screens/StocksRelatedScreens/StockDetailsScreen";

export type RootStackParamList = {
  Explore: undefined;
  StockDetails: undefined;
};

const AppStack = createNativeStackNavigator();
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ title: "Explore Stocks" }}
      />
      <AppStack.Screen
        name="StockDetails"
        component={StockDetailsScreen}
        options={{ title: "Stock Details" }}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
