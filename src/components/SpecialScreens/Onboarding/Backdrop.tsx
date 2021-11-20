import React from "react";
import { Animated, StyleSheet } from "react-native";

interface BackdropProps {
  scrollX: any;
  bgs: string[];
  width: number;
}

const Backdrop = ({ scrollX, bgs, width }: BackdropProps) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

export default Backdrop;
