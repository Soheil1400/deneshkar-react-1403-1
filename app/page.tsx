'use client'

import Categories from "@/src/component/Categories";
import Slide from "@/src/component/Slide";

export default function Home() {

    return (
        <div className={'flex w-full justify-center flex-wrap p-4'}>
            <Categories/>
            <Slide/>
        </div>
    );
}
