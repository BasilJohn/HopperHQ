import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import LandingScreen from "./src/screens/landing/landingView";
import HomeScreen from "./src/screens/home/homeView";
import LikesScreen from "./src/screens/likes/likesView";
import MessagesScreen from "./src/screens/messages/messagesView";
import SettingsScreen from "./src/screens/settings/settingsView";
import { black, primaryColor, white } from "./src/common/colorConstants";
import { commonStyles } from "./src/common/commonStyles";

const { tabItemActive, tabItemInActive, tabItemContainer } = commonStyles;
const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: white,
        tabBarLabelStyle: {
          color: "transparent",
        },
        tabBarStyle: {
          backgroundColor: black,
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                tabItemContainer,
                focused ? tabItemActive : tabItemInActive,
              ]}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={30}
              />
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Likes"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                tabItemContainer,
                focused ? tabItemActive : tabItemInActive,
              ]}
            >
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                color={color}
                size={30}
              />
            </View>
          ),
        }}
        component={LandingScreen}
      />
      <Tab.Screen
        name="Mesages"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                tabItemContainer,
                focused ? tabItemActive : tabItemInActive,
              ]}
            >
              <Ionicons
                name={focused ? "chatbubble" : "chatbubble-outline"}
                color={color}
                size={30}
              />
            </View>
          ),
        }}
        component={MessagesScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                tabItemContainer,
                focused ? tabItemActive : tabItemInActive,
              ]}
            >
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                color={color}
                size={30}
              />
            </View>
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
