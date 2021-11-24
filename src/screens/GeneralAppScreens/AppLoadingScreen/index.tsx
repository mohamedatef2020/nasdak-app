import React, { useRef, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import { RootStackParamList } from "../../../navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";
import AppColors from "../../../constants/Colors";

const AppLoadingScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "AppLoading">) => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef?.current?.play();
  }, [animationRef]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColors.white,
      }}
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <LottieView
          ref={animationRef}
          source={require("../../../../assets/lotties/appLoading.json")}
          style={{
            width: "100%",
          }}
          loop={false}
          onAnimationFinish={() => navigation.navigate("Explore")}
        />
        <Text
          h4
          style={{ width: "80%", color: AppColors.primary, fontWeight: "500" }}
        >
          This screen is meant to be something the user can have fun with while
          we are fetching whatever data the app wants...
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppLoadingScreen;
