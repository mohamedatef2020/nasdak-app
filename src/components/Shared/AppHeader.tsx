import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SearchBar, Header, Avatar } from "react-native-elements";
import AppColors from "../../constants/Colors";

import { useActions } from "../../overmind";

interface AppHeaderProps {
  isSearch?: boolean;
  logo?: string | undefined;
  initials?: string;
}

const AppHeader = ({ isSearch, logo, initials }: AppHeaderProps) => {
  const { searchTickerAction } = useActions().explore;
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const search = async (query: string) => {
    setLoading(true);
    setValue(query);
    await searchTickerAction(query);
    setLoading(false);
  };
  const updateSearch: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => void = async (e) => {
    try {
      await search(e.nativeEvent.text);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <>
      {isSearch ? (
        <SafeAreaView style={styles.container} edges={["top"]}>
          <View>
            <SearchBar
              platform="default"
              lightTheme
              showLoading={loading}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Search Stock"
              onChange={updateSearch}
              onClear={async () => {
                await search("");
              }}
              value={value}
            />
          </View>
        </SafeAreaView>
      ) : (
        <Header
          backgroundColor={AppColors.primary}
          leftComponent={{
            icon: "arrow-back",
            color: "#fff",
            iconStyle: { color: "#fff" },
            onPress: () => navigation.goBack(),
          }}
          leftContainerStyle={{
            justifyContent: "center",
          }}
          centerComponent={
            <Avatar
              source={{ uri: logo }}
              size="medium"
              rounded
              title={initials}
              titleStyle={{ color: AppColors.white }}
              placeholderStyle={{ backgroundColor: AppColors.primaryLighter }}
              avatarStyle={{
                resizeMode: "contain",
                borderWidth: logo ? 0 : 1,
                borderColor: AppColors.lighGray,
              }}
              titleStyle={{ color: AppColors.dark }}
              placeholderStyle={{ backgroundColor: AppColors.primaryLighter }}
              avatarStyle={{ resizeMode: "contain" }}
            />
          }
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
  },
  containerStyle: {
    backgroundColor: AppColors.primary,
    borderTopWidth: 0,
  },
  inputContainerStyle: {
    backgroundColor: AppColors.primaryLighter,
    borderRadius: 15,
  },
});

export default AppHeader;
