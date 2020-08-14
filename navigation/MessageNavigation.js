import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Messages from "../screens/Messages/Messages";
import Message from "../screens/Messages/Message";

export default createStackNavigator({
  Message,
  Messages,
});
