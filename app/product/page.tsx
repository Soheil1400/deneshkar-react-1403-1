'use client'
import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {addProduct} from "@/src/redux/slice/productSlice";
import Link from "next/link";

const Product = () => {
    const dispatch = useDispatch()

    const handleAddProduct = (food) => {
        dispatch(addProduct(food))
    }

    return(
        <div className={'flex flex-col w-full'}>
            <Link href={'/cart'}>
                <button>
                    {'رفتن به سبد خرید'}
                </button>
            </Link>
            <div className={'w-12 h-2 bg-red-500 '}/>
            <div className={'flex w-full mt-3'}>
            {DATABASE.foods.slice(0, 5).map(food => (
                    <div key={food.id}>
                        <div>
                            <Image src={food.image} alt={food.name} width={100} height={100}/>
                        </div>
                        <div>
                            {food.name}
                        </div>
                        <div>
                            <button className={'my-2 bg-red-500 px-3 py-2 rounded-xl'} onClick={() => handleAddProduct(food)}>
                                {'افزودن'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product