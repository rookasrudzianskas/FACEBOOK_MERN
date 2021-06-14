import './App.css';
import Header from "./components/Header";
import React from "react"
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import {useStateValue} from "./StateProvider";
import Widget from "./components/Widget";
import Login from "./components/Login";

function App() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="App">
            {
                user ? (
                    <>
                        <Header />

                        <div className="app__body">
                            <Sidebar />
                            <Feed />
                            <Widget />
                        </div>
                    </>
                ) : (
                    <Login />
                )
            }

        </div>
    );
}

export default App;



//B4QBeSPm1p8aTz2P
