import { StyleSheet } from "react-native";
import { primaryColor, white } from "./colorConstants";

export const commonStyles = StyleSheet.create({
  tabItemContainer: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 3,
  },
  tabItemActive: {
    borderColor: primaryColor,
  },
  tabItemInActive: {
    borderColor: "transparent",
  },
  topTabBarLabelStyle: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "none",
  },
  pageStyle: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
});
