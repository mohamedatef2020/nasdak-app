import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axiosInstance from "../../../utils/axiosInstance";
import { RootStackParamList } from "../../../navigator";
import styles from "./styles";
import AppColors from "../../../constants/Colors";

// components
import AppHeader from "../../../components/Shared/AppHeader";

// THIS TYPE WILL BE MOVED TO ITS OWN MODULE LATER
type responseData = {
  ticker: string;
  name: string;
};

const ExploreScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Explore">) => {
  const insets = useSafeAreaInsets();
  const [data, setData] = useState<responseData[]>([]);
  const [nextUrl, setNextUrl] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  // THIS FUNCTION WILL BE MOVED TO ITS OWN MODULE LATER
  const getData = async (url: string) => {
    try {
      const response = await axiosInstance.get(url);
      setData(response.data.results);
      setNextUrl(response.data?.next_url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("v3/reference/tickers?market=stocks&limit=20");
  }, []);
  return (
    <View style={styles.screen}>
      <AppHeader isSearch />
      <FlatList
        style={{ paddingBottom: insets.bottom }}
        data={data}
        onEndReached={async () => {
          setLoadingMore(true);
          try {
            if (nextUrl) {
              const url = nextUrl.replace("https://api.polygon.io/", "");
              const response = await axiosInstance.get(url);
              setData([...data, ...response.data.results]);
              setNextUrl(response.data?.next_url);
              setLoadingMore(false);
            }
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
