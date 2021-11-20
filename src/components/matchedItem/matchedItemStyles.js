import { StyleSheet } from "react-native";
import { primaryColor, white } from "../../common/colorConstants";

export const styles = StyleSheet.create({
  matchedItemContainer: {
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#FC6C67",
    marginTop: 15,
    borderRadius: 20,
  },
  matchedItemTextStyle: {
    color: white,
    fontSize: 24,
    fontWeight: "bold",
  },
  matchedItemItalicStyle: {
    color: white,
    fontStyle: "italic",
    fontSize: 16,
    paddingTop: 10,
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  matchedLikeStyle: {
    position: "absolute",
    zIndex: 1,
    top: 15,
    bottom: 0,
    left: -15,
    right: 30,
  },
  matchedLikeContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
