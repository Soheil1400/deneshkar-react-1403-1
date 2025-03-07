'use client'
import store from "@/src/redux/store";
import {Provider} from "react-redux";
import React from "react";

const ReduxProvider = ({children}: {children: React.ReactNode}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider