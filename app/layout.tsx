import "./globals.css";
import ReduxProvider from "@/src/provider/ReduxProvider";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="fa" dir={'rtl'}>
        <body>
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}