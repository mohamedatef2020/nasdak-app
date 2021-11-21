import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import AppColors from "../../../constants/Colors";

type StockBasicInfoProps = {
  ticker: string;
  fullName: string;
};

const StockBasicInfo = ({ ticker, fullName }: StockBasicInfoProps) => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.text}>
        {ticker}
      </Text>
      <Text h4 style={[styles.text, styles.company]}>
        {fullName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  text: {
    color: AppColors.white,
  },
  company: {
    fontSize: 16,
  },
});

export default StockBasicInfo;
