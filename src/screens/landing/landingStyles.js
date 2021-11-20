import { StyleSheet } from "react-native";
import { white, primaryColor } from "../../common/colorConstants";

export const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
  },
  tabBarActiveIndicatorStyle: {
    borderWidth: 3,
    borderColor: primaryColor,
  },
});
