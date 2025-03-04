import "./globals.css";
import ReduxProvider from "@/src/provider/ReduxProvider";
import {ReactNode} from "react";
import Header from "@/src/component/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
            <SpeedInsights />
        </ReduxProvider>
        </body>
        </html>
    );
}