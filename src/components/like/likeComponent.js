import React from "react";
import { View } from "react-native";
import { styles } from "./likeStyles";
import { Ionicons } from "@expo/vector-icons";

const { likeContainer } = styles;
const LikeComponent = ({ size = 25, style = likeContainer }) => (
  <View style={style}>
    <Ionicons name={"heart-outline"} color={"white"} size={size} />
  </View>
);

export default LikeComponent;
