import {createSlice} from "@reduxjs/toolkit";
import {Person, State} from "../interfaces/interfaces";
import {useAppDispatch} from "../app/hooks";

const initialState: State = {
    stage: 1,
    currentPerson: {name: 'Enter name', avatarLink: ''},
    personList: [],
};

const dialogueSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setNameAction(state, action) {
            state.currentPerson.name = action.payload;
        },
        setAvatarAction(state, action) {
            state.currentPerson.avatarLink = action.payload;
        },
        createPersonAction(state, action) {
            const newPerson: Person = {
                name: action.payload.persName,
                avatarLink: ""
            }
            state.personList.unshift(newPerson);
            console.log(newPerson.name);
            state.currentPerson = {...newPerson};
        },
        switchPersonAction (state, action) {
            state.currentPerson = action.payload;
        },
        switchScreenAction(state, action) {
            state.stage = action.payload;
        }
    }
})

export const {createPersonAction, setNameAction, setAvatarAction, switchPersonAction, switchScreenAction} = dialogueSlice.actions;
export default dialogueSlice.reducer;