import { GlobalContext } from "./context/GlobalContext";
import { GlobalStyled } from "styled-components";
import GlobalState from "./context/GlobalState";
import Router from "./router/Router";

function App() {
  return (
    <>
      <GlobalStyled/>
      <GlobalContext.Provider value={context}>
        <Router/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
