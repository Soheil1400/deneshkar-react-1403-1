'use client'
import Breadcrumb from "@/src/component/Breadcrumb";
import {useSelector} from "react-redux";
import {CartTypeData} from "@/src/model/product";
import {convertToPersian} from "@/src/utils/convertToPersian";
import Image from "next/image";
import React from "react";

const Page = () => {
    const cartsHistory = useSelector((state: { cart: CartTypeData[] }) => state.cart);
    console.log(cartsHistory)
    return (
        <div className="page-container">
            <div className="content-wrapper">
                <Breadcrumb title={'سفارش ها'}/>

                <div className="full w-full md:w-1/3 p-4">
                    <div className="user-info-box">
                        <p className="font-bold">{'سهیل ساعدی فرد'}</p>
                        <p>{'۰۹۱۰۵۲۸۲۶۳۹'}</p>
                    </div>
                </div>

                <div className="full w-full md:w-2/3 p-4">
                    <div className="order-box">
                        <p className="font-bold text-gray-400 mb-4">{'سفارش‌های من'}</p>
                        {cartsHistory.map((cart, index) => (
                            <div className={'w-full my-3'} key={index}>
                                <div className="order-item">
                                    <div className="cart-restaurant-info">
                                        <div className="restaurant-img">
                                            <Image
                                                src={cart.restaurantData.image}
                                                alt={cart.restaurantData.name}
                                                width={100}
                                                height={100}
                                                style={{width: '100%', height: '100%', borderRadius: '12px'}}
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold">{cart.restaurantData.name}</p>
                                            <p className="text-xs">{cart.restaurantData.address}</p>
                                        </div>
                                    </div>
                                    <div className="order-price">
                                        <p className="font-bold">{convertToPersian(cart.totalPrice)}</p>
                                        <p className="text-sm mr-1">{'تومان'}</p>
                                    </div>
                                </div>
                                {cartsHistory.map((cart, index) => (
                                    <div key={`food-${index}`} className="food-list">
                                        {cart.purchaseData.map((food, i) => (
                                            <div key={i} className="food-item">
                                                <Image
                                                    src={food.image}
                                                    alt={food.name}
                                                    width={100}
                                                    height={100}
                                                    style={{width: '100%', height: '100%', borderRadius: '12px'}}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                                <div className="cart-divider"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;


