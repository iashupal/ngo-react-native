import { createSwitchNavigator } from "react-navigation";
import AppNavigator from "./AppNavigator";
import LoginScreen from "../screens/Login";

const MainNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
    Login: LoginScreen,
  },
  {
    initialRouteName: "LoginScreen",
  }
);

export default MainNavigator;
// import { createStackNavigator, createAppContainer } from "react-navigation";
// import LoginScreen from "../screens/Login";
// import NgoList from "../screens/NgoList";

// const MainNavigator = createStackNavigator({
//   Login: { screen: LoginScreen },
//   NgoList: { screen: NgoList },
// });

// export default MainNavigator;
