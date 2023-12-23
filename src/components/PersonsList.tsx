import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";
import {createPersonAction, switchPersonAction} from "../features/dialogueSlice";

const PersonsList = () => {
    const dispatch = useAppDispatch();
    const personsList = useAppSelector((state:RootState)=>state.dialogueSlice.personList);
    const [persName, setName] = useState("");

    const handleInputClick = (e:React.MouseEvent<HTMLInputElement>) =>{

    }

    return (
        <div>
            {/* Display the list of users */}
            <ul>
                {personsList.map((pers) => (
                    <li className={"personItem"} key={pers.name} onClick={() => dispatch(switchPersonAction(pers))}>
                        {pers.name}
                    </li>
                ))}
                {/* Option to create a new user */}
                <li>
                    + <input type="text" placeholder={"Enter the name"}
                             onClick={e=> e.stopPropagation()}
                             onChange={(e) => setName(e.target.value)}/>
                    <button onClick={()=> {
                        console.log("newName:", persName);
                        dispatch(createPersonAction({persName}))
                    }}>
                        Create
                        </button>
                </li>
            </ul>
        </div>
    );
};

export default PersonsList;