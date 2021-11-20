import React from "react";
import { FlatList, View, Text } from "react-native";
import { styles } from "./styles";
import matchList from "../../data/matchList";
import matchedList from "../../data/matchedList";
import MatchItem from "../../components/matchItem/matchItem";
import MatchedItem from "../../components/matchedItem/matchedItem";

const {
  matchesText,
  mainContainer,
  matchesTextContainer,
  gridWidth,
  matchedItemContainer,
} = styles;

const Likes = () => {
  const renderMatchedItem = ({ item }) => (
    <View key={item.id}>
      <MatchedItem matchedItem={item} />
    </View>
  );
  const renderItem = ({ item }) => (
    <View key={item.id}>
      <MatchItem matchItem={item} />
    </View>
  );
  return (
    <View style={mainContainer}>
      <FlatList
        style={[gridWidth, matchedItemContainer]}
        contentContainerStyle={{
          paddingHorizontal: 25,
        }}
        data={matchedList}
        renderItem={renderMatchedItem}
      />
      <View style={matchesTextContainer}>
        <Text style={matchesText}>
          {"See all matches"} ({matchList.length})
        </Text>
      </View>
      <FlatList
        style={[gridWidth]}
        contentContainerStyle={{
          paddingHorizontal: 30,
        }}
        data={matchList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Likes;
