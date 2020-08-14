import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notification from "../screens/Tabs/Notification";
import Profile from "../screens/Tabs/Profile";
import MessagesLink from "../components/MessagesLink";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: { ...customConfig },
    },
  });

export default createBottomTabNavigator({
  Home: {
    screen: stackFactory(Home, {
      title: "Home",
      headerRight: () => <MessagesLink />,
    }),
  },
  Search: {
    screen: stackFactory(Search, {
      title: "Search",
    }),
  },
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation"),
    },
  },
  Notification: {
    screen: stackFactory(Notification, {
      title: "Notifications",
    }),
  },
  Profile: {
    screen: stackFactory(Profile, {
      title: "Profile",
    }),
  },
});
