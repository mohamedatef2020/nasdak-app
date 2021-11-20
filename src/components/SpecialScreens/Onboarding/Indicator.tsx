import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IndicatorProps {
  scrollX: any;
  width: number;
  DATA: { key: string; title: string; description: string; image: string }[];
}

const Indicator = ({ scrollX, width, DATA }: IndicatorProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.indicatorsContainer, { bottom: insets.bottom + 20 }]}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={[
              {
                opacity,
                transform: [
                  {
                    scale,
                  },
                ],
              },
              styles.indicator,
            ]}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  indicatorsContainer: {
    position: "absolute",
    flexDirection: "row",
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    margin: 10,
  },
});

export default Indicator;
