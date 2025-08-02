import "./App.css";
import CategoryView from "./bubble-view/bubble-view";
import TreeView from "./tree-view/tree-view";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-slate-400">
      <TreeView />
    </div>
  );
}

export default App;
