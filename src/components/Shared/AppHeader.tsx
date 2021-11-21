import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { SearchBar } from "react-native-elements";
import AppColors from "../../constants/Colors";

interface AppHeaderProps {
  isSearch?: boolean;
}

const AppHeader = ({ isSearch }: AppHeaderProps) => {
  const [value, setValue] = useState("");
  const updateSearch: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => void = (e) => {
    setValue(e.nativeEvent.text);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {isSearch ? (
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
      ) : (
        <View>
          <Text>without search</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
  },
  containerStyle: {
    backgroundColor: AppColors.primary,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    backgroundColor: AppColors.primaryLighter,
    borderRadius: 15,
  },
});

export default AppHeader;
