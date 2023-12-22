import React from 'react';
import ChatWindow from "./ChatWindow";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";

const MainScreen = () => {
    const dispatch = useAppDispatch();
    const currentPerson = useAppSelector((state: RootState) => state.dialogueSlice.currentPerson);
//todo: saving chat data and persons to local context until the end of dialogue, after user may authenticate and save data

    return (
        <div>
            <ChatWindow/>
        </div>
    );
};

export default MainScreen;