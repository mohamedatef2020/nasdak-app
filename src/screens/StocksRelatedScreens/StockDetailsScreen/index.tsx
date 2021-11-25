import React, { useEffect, useCallback } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigator";
import { useAppState, useActions } from "../../../overmind";
import { getInitials } from "../../../utils/helpers";
import styles from "./styles";

// components
import AppHeader from "../../../components/Shared/AppHeader";
import StockBasicInfo from "../../../components/SpecialScreens/StockDetails/StockBasicInfo";
import StockStatistics from "../../../components/SpecialScreens/StockDetails/StockStatistics";
import StockMoreInfo from "../../../components/SpecialScreens/StockDetails/StockMoreInfo";
import AppColors from "../../../constants/Colors";

const StockDetailsScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "StockDetails">) => {
  const { tickerDetails, tickerStatistics } = useAppState().tickerDetails;
  const { isLoading } = useAppState();
  const { getTickerStatisticsAction } = useActions().tickerDetails;

  const getTickerDetails = useCallback(async () => {
    await getTickerStatisticsAction(route?.params?.stockTicker);
  }, [route]);

  useEffect(() => {
    getTickerDetails();
  }, [getTickerDetails]);

  return (
    <View style={styles.screen}>
      <AppHeader
        logo={tickerDetails?.logo}
        initials={getInitials(route?.params?.stockName)}
      />
      <Overlay isVisible={isLoading}>
        <ActivityIndicator color={AppColors.primary} />
      </Overlay>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <StockBasicInfo
          ticker={route?.params?.stockTicker}
          fullName={route?.params?.stockName}
        />
        <StockStatistics
          close={tickerStatistics.c}
          open={tickerStatistics.o}
          high={tickerStatistics.h}
          low={tickerStatistics.l}
          volume={tickerStatistics.v}
        />
        <StockMoreInfo
          companyUrl={tickerDetails?.url}
          industry={tickerDetails?.industry}
          description={tickerDetails?.description}
        />
      </ScrollView>
    </View>
  );
};

export default StockDetailsScreen;
