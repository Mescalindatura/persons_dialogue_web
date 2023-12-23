import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {createPersonAction, setNameAction, switchScreenAction} from "../features/dialogueSlice";

const StartScreen = () => {
    const dispatch = useAppDispatch();
    const [persName, setName] = useState("");

    return (
        <div>
            <h1>Inner Dialogue App</h1>
            <div className="textField">Hey there! This is an application to imagine dialogue with a real person or just a
                voice from your head. It may help resolve conflict or prepare for a conversation.
            </div>
            <p></p>
            <input type="text" placeholder={'To start, enter the name'}
            onChange={(e)=>setName(e.target.value)}/>
            <button className={'startButton'} onClick={()=> {
                dispatch(createPersonAction({persName}));
                dispatch(switchScreenAction(2));
            }}>Start</button>
        </div>
    );
};

export default StartScreen;