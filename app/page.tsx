'use client'
import Categories from "@/src/component/Categories";
import ContactUs from "@/src/component/ContactUs";
import Slide from "@/src/component/Slide";

export default function Home() {
    return (
        <div className={'flex w-full justify-center flex-wrap'}>
            <Categories/>
            <Slide/>
            <ContactUs/>
        </div>
    );
}
