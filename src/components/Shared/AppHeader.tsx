import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SearchBar, Header, Avatar } from "react-native-elements";
import AppColors from "../../constants/Colors";

interface AppHeaderProps {
  isSearch?: boolean;
  logo?: string | undefined;
  initials?: string;
}

const AppHeader = ({ isSearch, logo, initials }: AppHeaderProps) => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const updateSearch: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => void = (e) => {
    setValue(e.nativeEvent.text);
  };

  return (
    <>
      {isSearch ? (
        <SafeAreaView style={styles.container} edges={["top"]}>
          <View>
            <SearchBar
              platform="default"
              lightTheme
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Search Stock"
              onChange={updateSearch}
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
