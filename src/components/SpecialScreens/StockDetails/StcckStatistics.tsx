import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import AppColors from "../../../constants/Colors";

type StockStatisticsProps = {
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
};

const StockStatistics = ({
  close,
  open,
  high,
  low,
  volume,
}: StockStatisticsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.statEntity}>
          <Text style={[styles.text, styles.textHeader]}>Close</Text>
          <Text style={styles.text}>
            <View>
              <Text style={[styles.text, styles.dollar]}>$</Text>
            </View>
            {close}
          </Text>
        </View>
        <View style={styles.statEntity}>
          <Text style={[styles.text, styles.textHeader]}>Open</Text>
          <Text style={styles.text}>
            <View>
              <Text style={[styles.text, styles.dollar]}>$</Text>
            </View>
            {open}
          </Text>
        </View>
        <View style={styles.statEntity}>
          <Text style={[styles.text, styles.textHeader]}>High</Text>
          <Text style={styles.text}>
            <View>
              <Text style={[styles.text, styles.dollar]}>$</Text>
            </View>
            {high}
          </Text>
        </View>
        <View style={styles.statEntity}>
          <Text style={[styles.text, styles.textHeader]}>Low</Text>
          <Text style={styles.text}>
            <View>
              <Text style={[styles.text, styles.dollar]}>$</Text>
            </View>
            {low}
          </Text>
        </View>
        <View style={styles.statEntity}>
          <Text style={[styles.text, styles.textHeader]}>Volume</Text>
          <Text style={styles.text}>
            <View>
              <Text style={[styles.text, styles.dollar]}>$</Text>
            </View>
            {volume}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryDarker,
    borderRadius: 10,
    marginBottom: 20,
  },
  subContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  statEntity: {
    width: "33.33%",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  textHeader: {
    marginBottom: 8,
  },
  text: {
    color: AppColors.white,
  },
  dollar: { fontSize: 10, alignSelf: "flex-start", height: 15, marginRight: 2 },
});

export default StockStatistics;
