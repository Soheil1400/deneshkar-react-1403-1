'use client'
import Image from "next/image";
import {convertToPersian} from "@/src/utils/convertToPersian";
import {addProduct, deleteProduct} from "@/src/redux/slice/productSlice";
import React from "react";
import {DATABASE} from "@/src/data/data";
import {useParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import AddFood from "@/src/component/restaurant/AddFood";
import {FoodTypeData} from "@/src/model/product";

const Menu = () => {
    const dispatch = useDispatch();
    const params = useParams() as { restaurantId: string }
    const foods = DATABASE.foods.filter(food => food.id !== +params.restaurantId)
    const cart = useSelector((state: { product: FoodTypeData[] }) => state.product)

    return (
        <div className="food-list-container">
            <div className="food-header">
                {'غذا ها'}
            </div>
            {
                foods.map(food => {
                    const cartFood = cart.find(cart => cart.id === food.id);
                    return (
                        <div className="food-card" key={food.id}>
                            <div className="flex justify-between w-full">
                                <div className="food-info">
                                    <div>{food.name}</div>
                                    <div className="food-desc">{food.desc}</div>
                                </div>
                                <div>
                                    <div className="food-image">
                                        <Image src={food.image} alt={food.name} width={100} height={100}
                                               style={{width: '100%', height: '100%', borderRadius: '12px'}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between w-full mt-4 items-center">
                                <p className="food-price">
                                    {`${convertToPersian(food.price)} تومان`}
                                </p>
                                {
                                    !!cartFood
                                        ? <AddFood food={cartFood}/>
                                        : <div onClick={() => dispatch(addProduct(food))} className="add-button">
                                            {'افزودن'}
                                        </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menu