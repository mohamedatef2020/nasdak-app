import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigator";
import styles from "./styles";

const ExploreScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Explore">) => {
  return (
    <View style={styles.screen}>
      <Text>Explore Screen</Text>
      <Button
        title="Stock details"
        onPress={() => navigation.navigate("StockDetails")}
      />
    </View>
  );
};

export default ExploreScreen;
