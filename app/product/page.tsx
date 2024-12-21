'use client'
import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, clearProduct, deleteProduct} from "@/src/redux/slice/productSlice";

const Product = () => {
    const products = useSelector(state => state.product)
    const dispatch = useDispatch()

    const totalProductCount = products.reduce((total, currentProduct) => total + currentProduct.count, 0)

    const handleAddProduct = (food) => {
        dispatch(addProduct(food))
    }

    const handleDeleteProduct = (food) => {
        dispatch(deleteProduct(food))
    }

    const handleClearProduct = () => {
        dispatch(clearProduct())
    }

    return(
        <div className={'flex flex-col w-full'}>
            <div>
                <h2>
                    {`سبد خرید(${totalProductCount})`}
                </h2>
            </div>
            <div>
                {
                    totalProductCount > 0 ?
                    <button className={'my-2 bg-red-500 px-3 py-2 rounded-xl'} onClick={handleClearProduct}>
                        {'حذف کامل سبد خرید'}
                    </button>
                        :
                        null
                }
            </div>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                    <div>
                            <Image src={product.image} alt={product.name} width={100} height={100}/>
                        </div>
                        <div>
                            {product.name}
                        </div>
                        <div className={'flex items-center'}>
                            <button className={'mx-2 bg-red-500 w-8 h-8 rounded-full'}
                                    onClick={() => handleDeleteProduct(product)}>
                                {product.count === 1 ? 'delete' : '-'}
                            </button>
                            <div>
                                {`تعداد ${product.count} عدد`}
                            </div>
                            <button className={'mx-2 bg-red-500 w-8 h-8 rounded-full'}
                                    onClick={() => handleAddProduct(product)}>
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
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