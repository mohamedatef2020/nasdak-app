import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { ListItem, Overlay } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../navigator";
import { useAppState, useActions } from "../../../overmind";
import styles from "./styles";
import AppColors from "../../../constants/Colors";

// components
import AppHeader from "../../../components/Shared/AppHeader";

const ExploreScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Explore">) => {
  const { getTickersDataAction } = useActions().explore;
  const { getTickerDetailsAction } = useActions().tickerDetails;
  const { tickers } = useAppState().explore;
  const { isLoading } = useAppState();
  const insets = useSafeAreaInsets();
  const [loadingMore, setLoadingMore] = useState(false);

  // get tickers
  const getData = async (url: string) => {
    try {
      await getTickersDataAction(url);
    } catch (e) {
      console.log(e);
    }
  };

  // THIS FUNCTION WILL BE MOVED TO ITS OWN MODULE LATER
  const getTickerData = async (ticker: string, name: string) => {
    try {
      const response = await getTickerDetailsAction(ticker);
      if (response?.status === 429) {
        return;
      }
      navigation.navigate("StockDetails", {
        stockTicker: ticker,
        stockName: name,
      });
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("v3/reference/tickers?market=stocks&limit=20");
  }, []);
  return (
    <View style={styles.screen}>
      <AppHeader isSearch />
      <Overlay isVisible={isLoading}>
        <ActivityIndicator />
      </Overlay>
      <FlatList
        style={{ paddingBottom: insets.bottom }}
        data={tickers.results}
        onEndReached={async () => {
          setLoadingMore(true);
          try {
            tickers.next_url && (await getTickersDataAction(tickers.next_url));
            setLoadingMore(false);
          } catch (e) {
            console.log(e);
            setLoadingMore(false);
          }
        }}
        onEndReachedThreshold={0}
        ListFooterComponent={
          <View style={styles.listFooter}>
            {loadingMore ? (
              <ActivityIndicator color={AppColors.primaryLighter} />
            ) : null}
          </View>
        }
        ListFooterComponentStyle={{
          backgroundColor: AppColors.primary,
          paddingBottom: insets.bottom,
        }}
        renderItem={({ item }) => (
          <ListItem
            key={item?.ticker}
            containerStyle={styles.item}
            bottomDivider
            onPress={() => getTickerData(item.ticker, item.name)}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.itemTitle}>
                {item?.ticker}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.itemSubtitle} numberOfLines={1}>
                {item?.name}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron tvParallaxProperties />
          </ListItem>
        )}
        keyExtractor={(item) => item.ticker}
      />
    </View>
  );
};

export default ExploreScreen;
