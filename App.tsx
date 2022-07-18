import Main from "./src/Main";
import { Provider } from "react-redux";
import configureStore from "./src/Store/ConfigureStore";
import { NavigationContainer } from "@react-navigation/native";

export default () => {
  const store = configureStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>
  );
};
