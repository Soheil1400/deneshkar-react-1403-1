'use client'
import {useDispatch, useSelector} from "react-redux";
import {FoodTypeData, RestaurantTypeData} from "@/src/model/product";
import {convertToPersian} from "@/src/utils/convertToPersian";
import {MdDelete} from "react-icons/md";
import {clearProduct} from "@/src/redux/slice/cartSlice";
import AddFood from "@/src/component/AddFood";
import React from 'react'

interface Props {
    restaurantData: RestaurantTypeData
}

const PriceRow = ({title, price}) => {
    return (
        <div className={'w-full flex justify-between my-1'}>
            <p>
                {title}
            </p>
            <div className={'flex text-sm'}>
                <p className={'font-bold'}>
                    {convertToPersian(price)}
                </p>
                <p className={'mr-1'}>
                    {'تومان'}
                </p>
            </div>
        </div>
    )
}

const Cart = ({restaurantData}: Props) => {
    const cart = useSelector((state): { cart: FoodTypeData[] } => state.cart) as FoodTypeData[];
    const totalCount = cart.reduce((total, food) => total + food.count, 0);
    const totalPrice = cart.reduce((total, food) => total + (food.count * food.price), 0);
    const totalPurchase = totalPrice + restaurantData.delivery.price
    const isCartEmpty = totalCount === 0
    const dispatch = useDispatch()

    if (isCartEmpty) {
        return null
    }

    return (
        <div className={'flex w-full rounded-xl p-4 bg-white shadow-shadows-small mt-4 flex-wrap'}>
            <div className={'flex justify-between w-full mb-3 items-center'}>
                <p>
                    {`سبد خرید(${convertToPersian(totalCount)})`}
                </p>
                <div className={'text-alert-main text-lg cursor-pointer'}>
                    <MdDelete onClick={() => dispatch(clearProduct())}/>
                </div>
            </div>
            {cart.map(food => (
                <React.Fragment key={food.id}>
                    <div className={'flex flex-col my-3 w-full'}>
                        <p className={'w-full font-bold'}>
                            {food.name}
                        </p>
                        <div className={'w-full flex justify-between mt-3 items-center'}>
                            <div className={'flex '}>
                                <p className={'text-sm font-bold'}>
                                    {convertToPersian(food.price)}
                                </p>
                                <p className={'text-sm mr-1'}>
                                    {'تومان'}
                                </p>
                            </div>
                            <AddFood cartFood={food}/>
                        </div>
                    </div>
                    <div className={'w-full my-2 h-0.5 bg-gray6-color'}/>
                </React.Fragment>
            ))}
            <div className={'w-full'}>
                <PriceRow title={'مجموع'} price={totalPrice}/>
                <PriceRow title={'هزینه ارسال'} price={restaurantData.delivery.price}/>
            </div>
            <div className={'w-full my-2 h-0.5 bg-gray6-color'}/>
            <div className={'w-full'}>
                <PriceRow title={'قابل پرداخت'} price={totalPurchase}/>
            </div>
            <div className={'w-full mt-10'}>
                <button className={'w-full bg-primary-main text-center py-2 rounded-lg text-white text-lg font-bold'}>
                    {'ثبت سفارش'}
                </button>
            </div>
        </div>
    )
}

export default Cart