import { Provider } from "react-redux";
import Main from "./components/Main";
import generateStore from "./redux/header/store";

function App() {

  const store = generateStore();

  return (
    <>
      <Provider
        store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
