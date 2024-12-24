'use client'
import Categories from "@/src/component/Categories";
import ContactUs from "@/src/component/ContactUs";
import Slide from "@/src/component/Slide";
import {useState} from "react";
import {DATABASE} from "@/src/data/data";

export default function Home() {
    const [search, setSearch] = useState("");

    const filteredFoods = DATABASE.foods.filter(item => item.name.includes(search)).slice(0, 5)

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className={'flex w-full justify-center flex-wrap'}>
            <div className={'w-full'}>
                <input value={search} onChange={(e) => handleChange(e)}/>
                <div>
                    {
                        search !== ''
                            ?
                            <div>
                                {
                                    filteredFoods.length === 0
                                        ?
                                        <div>
                                            {'غذایی یافت نشد'}
                                        </div>
                                        :
                                        filteredFoods.map(food => (
                                            <div>
                                                {food.name}
                                            </div>
                                        ))}
                            </div>
                            :
                            null
                    }
                </div>
            </div>
            <Categories/>
            <Slide/>
            <ContactUs/>
        </div>
    );
}
