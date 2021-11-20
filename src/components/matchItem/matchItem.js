import React from "react";
import { Text, View, Image } from "react-native";
import LikeComponent from "../like/likeComponent";
import { styles } from "./matchItemStyles";

const { itemContainer, matchItemText, imageContainer, imageStyle } = styles;
const MatchItem = ({ matchItem }) => {
  return (
    <View style={itemContainer}>
      <View style={imageContainer}>
        <Image
          style={imageStyle}
          resizeMode="contain"
          source={matchItem.picture}
        />
        <Text style={matchItemText}>
          {matchItem.firstName} {matchItem.lastName}
        </Text>
      </View>

      <LikeComponent />
    </View>
  );
};

export default MatchItem;
