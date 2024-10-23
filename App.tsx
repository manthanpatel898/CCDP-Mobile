import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigations/AppNavigator";
import AuthNavigator from "./src/navigations/AuthNavigator";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
function App(): React.JSX.Element {
  const isAuthenticated = true; // Check token from AsyncStorage or Auth Context

  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;