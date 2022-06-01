import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const userSlice = createSlice({
    name:'user',
    initialState:[
        {
            id:uuidv4(),
            name:"meriam",
            age:28,
            email:"bensalah@gmail.com"
        }
    ],
    reducers:{

        //la 1ere function ajout de clients 

      addUSer:(state,action)=>{
          
             const newContact={
                 id:uuidv4(),
                ...action.payload
             }
             //best practice is to 
             return [...state,newContact]
       }

    ,



        //bich njibou el lista kemla mil backend donc n7otoha fil front  
//nrj3ou ely bich yjina el kolla ley howa biensure jeyna mil backend 
setContacts:(state,action)=>{
    return action.payload;
}

    }
})

export const {addContact,setContacts} = userSlice.actions

export default userSlice.reducer