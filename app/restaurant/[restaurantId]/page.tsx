import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import {convertToPersian} from "@/src/utils/convertToPersian";
import React from "react";
import Menu from "@/src/component/restaurant/Menu";
import Cart from "@/src/component/restaurant/Cart";
import {RestaurantTypeData} from "@/src/model/product";
import Breadcrumb from "@/src/component/Breadcrumb";

type Params = Promise<{ restaurantId: string }>

const Page = async (props: { params: Params }) => {
    const params = await props.params;
    const [restaurantData] = DATABASE.restaurants.filter(res => res.id === +params.restaurantId) as RestaurantTypeData[]
    return (
        <div className="page-container">
            <div className="content-wrapper">
                <Breadcrumb title={restaurantData.name}/>
                <div className="section">
                    <div className="restaurant-info">
                        <div className="restaurant-image">
                            <Image src={restaurantData.image} alt={restaurantData.name} width={100} height={100}
                                   style={{width: '100%', height: '100%', borderRadius: '12px'}}/>
                        </div>
                        <div className="restaurant-details">
                            <div className="restaurant-name">{restaurantData.name}</div>
                        </div>
                    </div>
                </div>
                <Menu/>
                <div className="section">
                    <div className="delivery-info">
                        <Image src={restaurantData.delivery.icon} alt={''} width={16} height={16}
                               style={{marginLeft: '4px'}}/>
                        {` ${restaurantData.delivery.type} `}
                        {` ${convertToPersian(restaurantData.delivery.price)} تومان`}
                    </div>
                    <Cart restaurantData={restaurantData}/>
                </div>
            </div>
        </div>
    )
}

export default Page