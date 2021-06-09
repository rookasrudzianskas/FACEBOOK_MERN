import './App.css';
import Header from "./components/Header";
import React from "react"
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
function App() {
  return (
    <div className="app">

      <Header />
      <div className="app__body">
        <Sidebar />

        <Feed />
      </div>
    </div>
  );
}

export default App;



//B4QBeSPm1p8aTz2P
