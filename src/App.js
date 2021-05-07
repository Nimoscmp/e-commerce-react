/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  Redux
import { Provider } from "react-redux";
import generateStore from "./redux/store";
//  Components
import SubApp from "./SubApp";


/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

function App() {

  const store = generateStore();
             
  return (
    <>
    
      <Provider
        store={store}>
        
        <SubApp/>
        
      </Provider>
    
    </>
  );
}

export default App;
