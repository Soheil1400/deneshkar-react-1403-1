'use client'


import {DATABASE} from "@/src/data/data";
import Image from "next/image";

const Product = () => {
    return(
        <div>
            <div>
                <h2>
                    {'سبد خرید'}
                </h2>
            </div>
            <div className={'w-12 h-2 bg-red-500'}/>
            {DATABASE.foods.slice(0,5).map( food => (
                <div key={food.id}>
                    <div>
                        <Image src={food.image} alt={food.name} width={100} height={100}/>
                    </div>
                    <div>
                        {food.name}
                    </div>
                    <div>
                        <button className={'my-2 bg-red-500 px-3 py-2 rounded-xl'}>
                            {'افزودن'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product