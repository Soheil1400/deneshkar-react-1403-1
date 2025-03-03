'use client'
import {convertToPersian} from "@/src/utils/convertToPersian";
import {MdAdd, MdDelete, MdHorizontalRule} from "react-icons/md";
import {addProduct, clearProduct, deleteProduct} from "@/src/redux/slice/productSlice";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FoodTypeData, RestaurantTypeData} from "@/src/model/product";

const Cart = ({restaurantData}: { restaurantData: RestaurantTypeData }) => {
    const cart = useSelector((state: { product: FoodTypeData[] }) => state.product)
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((total, food) => food.count * food.price + total, 0)
    const totalCount = cart.reduce((total, food) => food.count + total, 0)
    const isCartEmpty = cart.length === 0

    if (isCartEmpty) {
        return null
    }

    return (
        <div key="cart" className="cart-container">
            <div className="cart-header">
                <p>{`سبد خرید (${convertToPersian(totalCount)})`}</p>
                <div className="cart-delete">
                    <MdDelete onClick={() => dispatch(clearProduct())}/>
                </div>
            </div>
            {cart.map(food => (
                <React.Fragment key={food.id}>
                    <div className="cart-item">
                        <p className="cart-item-name">{food.name}</p>
                        <div className="cart-item-info">
                            <div className="cart-price">
                                <p className="cart-price-text">{convertToPersian(food.price)}</p>
                                <p className="cart-price-unit">تومان</p>
                            </div>
                            <div className="cart-actions">
                                <div onClick={() => dispatch(deleteProduct(food))} className="cart-action-btn">
                                    <MdHorizontalRule/>
                                </div>
                                <p className="cart-price-text">{convertToPersian(food.count)}</p>
                                <div onClick={() => dispatch(addProduct(food))} className="cart-action-btn">
                                    <MdAdd/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-divider"/>
                </React.Fragment>
            ))}
            <div className="cart-summary">
                <div className="cart-summary-row">
                    <p>مجموع</p>
                    <div className="cart-price">
                        <p className="cart-price-text">{convertToPersian(totalPrice)}</p>
                        <p className="cart-price-unit">تومان</p>
                    </div>
                </div>
                <div className="cart-summary-row">
                    <p>هزینه ارسال</p>
                    <div className="cart-price">
                        <p className="cart-price-text">{convertToPersian(restaurantData.delivery.price)}</p>
                        <p className="cart-price-unit">تومان</p>
                    </div>
                </div>
            </div>
            <div className="cart-divider"/>
            <div className="cart-summary">
                <div className="cart-summary-row">
                    <p className="cart-summary-label">قابل پرداخت</p>
                    <div className="cart-price">
                        <p className="cart-price-text">{convertToPersian(totalPrice + restaurantData.delivery.price)}</p>
                        <p className="cart-price-unit">تومان</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10">
                <button className="cart-checkout-btn">ثبت سفارش</button>
            </div>
        </div>
    )
}

export default Cart