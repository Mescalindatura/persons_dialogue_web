import React, {useState} from 'react';
import ChatWindow from "./ChatWindow";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";
import PersonsList from "./PersonsList";

const MainScreen = () => {
    const dispatch = useAppDispatch();
    const currentPerson = useAppSelector((state: RootState) => state.dialogueSlice.currentPerson);
    const [isVisible, setVisible] = useState(false);

//todo: saving chat data and persons to local context until the end of dialogue, after user may authenticate and save data

    return (
        <div>
            <ChatWindow/>
            <div className="personSpeaks">
                <img src={currentPerson.avatarLink} alt="avatar"/>
                <button className="selectPerson" onClick={()=>setVisible(!isVisible)}>
                    {!isVisible && currentPerson.name}
                    {isVisible && <PersonsList/>}
                </button>
                <input type="text" className="personInput" placeholder={"What would say this person?"}/>
                <button className="send" >Send</button>
            </div>
        </div>
    );
};

export default MainScreen;