import Grandchild from "./Grandchild";
import Parent from "./Parent";
import Child from "./Child";
import { createContext } from "react";
// creating store
export const nameContext = createContext();
function App() {
  const name = "kittu";
  const fav = "luffy";
  return (
    <div>
      <Parent />
      <Child />
      {/* providing value phase */}
      <nameContext.Provider value={{ name, fav }}>
        <Grandchild />
      </nameContext.Provider>
    </div>
  );
}

export default App;
