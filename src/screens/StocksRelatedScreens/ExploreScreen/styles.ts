import { StyleSheet } from "react-native";
import AppColors from "../../../constants/Colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  item: {
    backgroundColor: AppColors.primary,
  },
  itemTitle: {
    color: AppColors.white,
  },
  itemSubtitle: {
    color: AppColors.gray,
  },
  listFooter: { height: 50, justifyContent: "center" },
});

export default styles;
