import React from "react";
import { View, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LikesScreen from "../likes/likesView";
import { styles } from "./landingStyles";
import { commonStyles } from "../../common/commonStyles";

const { landingContainer, tabBarActiveIndicatorStyle } = styles;
const { topTabBarLabelStyle } = commonStyles;
const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarIndicator: false,
        tabBarIndicatorStyle: tabBarActiveIndicatorStyle,
        tabBarLabelStyle: topTabBarLabelStyle,
      }}
    >
      <TopTab.Screen name="Received" component={LikesScreen} />
      <TopTab.Screen name="Sent" component={LikesScreen} />
      <TopTab.Screen name="Visitors" component={LikesScreen} />
    </TopTab.Navigator>
  );
};

const Landing = () => {
  return (
    <SafeAreaView style={landingContainer}>
      <TopTabs />
    </SafeAreaView>
  );
};

export default Landing;
