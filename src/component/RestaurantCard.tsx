import Image from "next/image";
import {MdOutlineStar} from "react-icons/md";
import {convertToPersian} from "@/src/utils/convertToPersian";


const RestaurantCard = ({restaurant}) => {
    return (
        <div className={'flex flex-wrap w-full shadow-shadows-medium hover:shadow-shadows-high'}>
            <div className={'w-full h-36 rounded-t-xl relative'}>
                <Image src={restaurant.image} alt={restaurant.name} width={100} height={100} style={{
                    width: "100%", height: "100%", borderRadius: '8px 8px 0 0'
                }}/>
                <div
                    className={'absolute bg-white top-8 rounded-tl-xl rounded-bl-xl px-4 py-1 text-secondary-main text-sm'}>
                    {restaurant.pay}
                </div>
            </div>
            <div className={'w-full flex flex-col  justify-center items-center -mt-8  z-40'}>
                <div className={'w-20 h-20 rounded-xl border-white border-solid border-4'}>
                    <Image src={restaurant.logo} alt={restaurant.name} width={100} height={100} style={{
                        width: "100%", height: "100%", borderRadius: '8px'
                    }}/>
                </div>
                <div className={'mt-4 text-lg font-bold'}>
                    {restaurant.name}
                </div>
                <div className={'flex my-1 text-sm items-center'}>
                    <MdOutlineStar style={{color: '#FACB0F', marginLeft: '2px'}}/>
                    {` ${convertToPersian(restaurant.star)} (${convertToPersian(restaurant.rate)})`}
                </div>
                <div className={'flex text-xs my-4'}>
                    <Image src={restaurant.delivery.icon} alt={''} width={16} height={16} style={{marginLeft: '4px'}}/>
                    {` ${restaurant.delivery.type} `}
                    {` ${convertToPersian(restaurant.delivery.price)} تومان `}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard