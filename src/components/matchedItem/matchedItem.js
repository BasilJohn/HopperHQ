import React from "react";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./matchedItemStyles";
import { gradientColor, primaryColor } from "../../common/colorConstants";
import LikeComponent from "../like/likeComponent";

const {
  matchedItemContainer,
  matchedItemTextStyle,
  matchedItemItalicStyle,
  imageStyle,
  matchedLikeStyle,
  matchedLikeContainer,
} = styles;
const MatchedItem = ({ matchedItem }) => {
  return (
    <LinearGradient
      style={matchedItemContainer}
      colors={[primaryColor, gradientColor]}
      style={matchedItemContainer}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View>
        <Text style={matchedItemTextStyle}>It's a Match!</Text>
        <Text style={matchedItemItalicStyle}>
          You and {matchedItem.firstName} are meant to be.
        </Text>
      </View>
      <View>
        <View style={matchedLikeStyle}>
          <LikeComponent style={matchedLikeContainer} size={20} />
        </View>
        <Image
          style={imageStyle}
          resizeMode="contain"
          source={matchedItem.picture}
        />
      </View>
    </LinearGradient>
  );
};

export default MatchedItem;
