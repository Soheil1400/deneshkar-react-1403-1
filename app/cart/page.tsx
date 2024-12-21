'use client'
import {useDispatch, useSelector} from "react-redux";
import {addProduct, clearProduct, deleteProduct} from "@/src/redux/slice/productSlice";
import Image from "next/image";
import {addCartToHistory} from "@/src/redux/slice/historySlice";
import Link from "next/link";

const Page = () => {
    const products = useSelector(state => state.product)
    const dispatch = useDispatch()

    const totalProductCount = products.reduce((total, currentProduct) => total + currentProduct.count, 0)

    const totalPrice = products.reduce((total, currentProduct) => total + currentProduct.price * currentProduct.count, 0)

    const handleAddProduct = (food) => {
        dispatch(addProduct(food))
    }

    const handleDeleteProduct = (food) => {
        dispatch(deleteProduct(food))
    }

    const handleClearProduct = () => {
        dispatch(clearProduct())
    }

    const handleAddToHistory = () => {
        dispatch(addCartToHistory(products))
        handleClearProduct()
    }

    return (
        <div>
            <Link href={'/history'}>
                <button>
                    {'دیدن تاریخچه سفارشات'}
                </button>
            </Link>
            <div>
                {'سبد خرید نهایی'}
            </div>
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
            <div>
                {'مجموع سبد خرید: '}
                {totalPrice}
            </div>
            <button onClick={handleAddToHistory}>
                {'نهایی کردن سبد خرید'}
            </button>
        </div>
    )
}

export default Page