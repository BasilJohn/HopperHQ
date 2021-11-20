import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    height: 80,
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderColor: "#E3E3E3",
    alignItems: "center",
    justifyContent: "space-between",
  },
  matchItemText: {
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 20,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
});
