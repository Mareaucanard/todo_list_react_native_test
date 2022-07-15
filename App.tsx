import Main from "./src/Main";
import { Provider } from "react-redux";
import configureStore from "./src/Store/ConfigureStore";

export default () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
