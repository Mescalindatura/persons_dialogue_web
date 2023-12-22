import {createSlice} from "@reduxjs/toolkit";
import {Person, State} from "../interfaces/interfaces";

const initialState: State = {
    stage: 1,
    currentPerson: {name: 'Enter name', avatarLink: ''},
        personList: {
            personList: [],
            isVisible: false
        }
};

const dialogueSlice = createSlice({
name: 'person',
initialState,
    reducers: {
    setNameAction (state, action) {
state.currentPerson = action.payload;
    },
        setAvatarAction(state, action){
        state.currentPerson.avatarLink = action.payload;
        },
        createPersonAction (state, action) {
        let newPerson: Person = {
            name: action.payload.persName,
            avatarLink: action.payload.avatarLink
        }
        state.personList.personList.unshift(newPerson);
        },
        switchScreenAction (state, action) {
        state.stage = action.payload;
        }
    }
})

export const {createPersonAction, setNameAction, setAvatarAction, switchScreenAction} = dialogueSlice.actions;
export default dialogueSlice.reducer;