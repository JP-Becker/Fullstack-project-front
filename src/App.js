import { GlobalContext } from "./context/GlobalContext";
import { GlobalStyled } from "./GlobalStyled";
import GlobalState from "./context/GlobalState";
import Routerr  from "./router/Routerr";


function App() {

  const context = GlobalState()

  return (
    <>
      <GlobalStyled/>
      <GlobalContext.Provider value={context}>
        <Routerr/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
