import Link from "next/link";
import Image from "next/image";
import {MdOutlineStar} from "react-icons/md";
import {convertToPersian} from "@/src/utils/convertToPersian";
import {RestaurantTypeData} from "@/src/model/product";

const RestaurantCard = ({restaurant}: {restaurant: RestaurantTypeData}) => {
    return(
        <Link href={`/restaurant/${restaurant.id}`}>
            <div className="slide-card">
                <div className="slide-image-container">
                    <Image src={restaurant.image} alt={restaurant.name} width={100} height={100}
                           style={{width: '100%', height: '100%', borderRadius: '8px 8px 0 0'}}/>
                    <div className="slide-payment-badge">
                        {restaurant.pay}
                    </div>
                </div>
                <div className="slide-logo-container">
                    <div className="slide-logo">
                        <Image src={restaurant.logo} alt={restaurant.name} width={100} height={100}
                               style={{width: '100%', height: '100%', borderRadius: '8px'}}/>
                    </div>
                    <div className="slide-name">{restaurant.name}</div>
                    <div className="slide-rating">
                        <MdOutlineStar style={{color: '#FACB0F', marginLeft: '2px'}}/>
                        {` ${restaurant.star} (${restaurant.rate}) `}
                    </div>
                    <div className="slide-categories">
                        {restaurant.otherCats.join(", ")}
                    </div>
                    <div className="slide-delivery">
                        <Image src={restaurant.delivery.icon} alt="" width={16} height={16}
                               style={{marginLeft: '4px'}}/>
                        {` ${restaurant.delivery.type} `}
                        {` ${convertToPersian(restaurant.delivery.price)} تومان`}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard