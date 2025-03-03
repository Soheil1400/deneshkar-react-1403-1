'use client'
import store from "@/src/redux/store";
import {Provider} from "react-redux";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const ReduxProvider = ({children}: Props) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider