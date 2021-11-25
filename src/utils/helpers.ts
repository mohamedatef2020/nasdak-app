import AsyncStorage from "@react-native-async-storage/async-storage";
export const getInitials = function (string: string): string {
  var names = string?.split(" "),
    initials = names[0]?.substring(0, 1)?.toUpperCase();

  if (names?.length > 1) {
    initials += names[1]?.substring(0, 1)?.toUpperCase();
  }
  return initials;
};

// async storage helper functions
export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) {
      return null;
    } else {
      return JSON.parse(value);
    }
  } catch (e) {
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
