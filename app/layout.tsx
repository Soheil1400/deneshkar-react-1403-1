import "./globals.css";
import {ReactNode} from "react";
import Header from "@/src/component/Header";
import ReduxProvider from "@/src/provider/ReduxProvider";

interface Props {
    children: ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="fa" dir={'rtl'}>
        <body className={'bg-surface-main'}>
        <ReduxProvider>
            <Header/>
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}