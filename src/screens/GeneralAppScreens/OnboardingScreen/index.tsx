import * as React from "react";
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigator";
import { useActions } from "../../../overmind";
import styles from "./styles";

// components
import Indicator from "../../../components/SpecialScreens/Onboarding/Indicator";
import Backdrop from "../../../components/SpecialScreens/Onboarding/Backdrop";
import Square from "../../../components/SpecialScreens/Onboarding/Square";

// functions and helpers
import { storeData } from "../../../utils/helpers";

const { width, height } = Dimensions.get("screen");

const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const DATA = [
  {
    key: "3571572",
    title: "Commission Free Investment.",
    description: "Invest in Egyptian stocks and mutual funds commission free",
    image: require("../../../../assets/onboarding/money-bag.png"),
  },
  {
    key: "3571747",
    title: "Easy Account Openning",
    description: "Open your investor account from the comfort of your home",
    image: require("../../../../assets/onboarding/computer.png"),
  },
  {
    key: "3571680",
    title: "Secure and Protected",
    description:
      "Secure your account using two-step authentication and digital identity",
    image: require("../../../../assets/onboarding/padlock.png"),
  },
];

export default function OnboardingScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Onboarding">) {
  const { initializarions } = useActions();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} width={width} bgs={bgs} />
      <Square scrollX={scrollX} width={width} height={height} />
      <Animated.FlatList
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width,
                alignItems: "center",
                padding: 20,
                zIndex: 10,
              }}
            >
              <View
                style={{
                  flex: 0.8,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={[
                    { width: width / 2.2, height: width / 2.2 },
                    styles.image,
                  ]}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              {index === 2 && (
                <Icon
                  raised
                  name="arrow-right"
                  type="font-awesome"
                  color="#FF63ED"
                  tvParallaxProperties
                  containerStyle={{
                    alignSelf: "flex-end",
                    bottom: 0,
                    position: "absolute",
                    right: 20,
                    zIndex: 2000,
                  }}
                  onPress={async () => {
                    await storeData("@isIntroSeen", JSON.stringify(true));
                    // navigation.replace("Explore");
                    initializarions();
                  }}
                />
              )}
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} width={width} DATA={DATA} />
    </View>
  );
}
