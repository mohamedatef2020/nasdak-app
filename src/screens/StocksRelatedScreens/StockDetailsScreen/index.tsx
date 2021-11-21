import React from "react";
import { View, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigator";
import styles from "./styles";

// components
import AppHeader from "../../../components/Shared/AppHeader";
import StockBasicInfo from "../../../components/SpecialScreens/StockDetails/StockBasicInfo";
import StockStatistics from "../../../components/SpecialScreens/StockDetails/StcckStatistics";
import StockMoreInfo from "../../../components/SpecialScreens/StockDetails/StockMoreInfo";

const StockDetailsScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "StockDetails">) => {
  console.log("asdasd", route.params);
  return (
    <View style={styles.screen}>
      <AppHeader
        logo={route?.params?.stockLogo}
        initials={route?.params?.stockInitials}
      />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <StockBasicInfo
          ticker={route?.params?.stockTicker}
          fullName={route?.params?.stockName}
        />
        <StockStatistics
          close={route?.params?.close}
          open={route?.params?.open}
          high={route?.params?.high}
          low={route?.params?.low}
          volume={route?.params?.volume}
        />
        <StockMoreInfo
          companyUrl={route?.params?.companyUrl}
          industry={route?.params?.industry}
          description={route?.params?.description}
        />
      </ScrollView>
    </View>
  );
};

export default StockDetailsScreen;
