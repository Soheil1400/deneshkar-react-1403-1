'use client'
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import store from "@/src/redux/store";
import {Provider} from "react-redux";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir={'rtl'}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Provider store={store}>
            {children}
        </Provider>
        </body>
        </html>
    );
}