import React from 'react';
import './App.css';
import StartScreen from "./components/StartScreen";
import {useSelector} from "react-redux";
import {useAppSelector} from "./app/hooks";
import MainScreen from "./components/MainScreen";

function App()
{
    const stage = useAppSelector(state => state.dialogueSlice.stage);
    return (
        <div className="App">
            {stage===1 && <StartScreen/>}
            {stage===2 && <MainScreen/>}
        </div>
    );
}

export default App;
