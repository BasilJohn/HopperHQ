import { StyleSheet } from "react-native";
import { primaryColor, white } from "../../common/colorConstants";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
  matchesText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "600",
  },
  matchesTextContainer: {
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  gridWidth: {
    width: "100%",
  },
  matchedItemContainer: {
    minHeight: 280,
  },
});
