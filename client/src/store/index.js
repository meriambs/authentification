import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import accountSlice from './accountSlice'
export default configureStore({
    reducer:{
        user:userSlice,
        account:accountSlice,
    }
})