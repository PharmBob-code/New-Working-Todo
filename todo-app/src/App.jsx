import { useState } from "react";
import Todo from "./component/Todo";
import Header from "./component/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}
export default App;
