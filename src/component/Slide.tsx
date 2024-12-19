import {MdArrowBackIosNew, MdOutlineStar} from "react-icons/md";
import {Swiper, SwiperSlide} from "swiper/react";
import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import SwiperNextButton from "@/src/component/SwiperNextButton";
import 'swiper/css';

const Slide = () => {
    return (
        <div className={'flex max-w-7xl flex-wrap w-full my-16'}>
            <div className={'flex justify-between w-full my-4'}>
                <div className={'text-xl font-bold'}>
                    {'تازه‌ها در اسنپ‌فود'}
                </div>
                <div className={'flex text-secondary-main font-bold text-lg'}>
                    {'مشاهده همه'}
                    <MdArrowBackIosNew style={{marginRight: '8px', marginTop: '4px'}}/>
                </div>
            </div>
            <div className={'flex w-full flex-wrap relative'}>
                <Swiper spaceBetween={20} slidesPerView={4}>
                    <SwiperNextButton/>
                    {DATABASE.restaurants.map(restaurant => (
                        <SwiperSlide key={restaurant.id}>
                            <div className={'flex flex-wrap w-full p-1'}>
                                <div
                                    className={'flex flex-wrap w-full cursor-pointer shadow-shadows-medium hover:shadow-shadows-high'}>
                                    <div className={'w-full bg-amber-600 h-36 rounded-t-xl relative'}>
                                        <Image src={restaurant.image} alt={restaurant.name} width={100} height={100}
                                               style={{width: '100%', height: '100%', borderRadius: '8px 8px 0 0'}}/>
                                        <div
                                            className={'absolute bg-white top-8 rounded-tl-xl rounded-bl-xl px-4 py-1 text-secondary-main text-sm'}>
                                            {restaurant.pay}
                                        </div>
                                    </div>
                                    <div className={'flex flex-col w-full justify-center items-center -mt-8 z-40'}>
                                        <div className={'w-20 h-20 rounded-xl border-white border-solid border-4'}>
                                            <Image src={restaurant.logo} alt={restaurant.name} width={100} height={100}
                                                   style={{width: '100%', height: '100%', borderRadius: '8px'}}/>
                                        </div>
                                        <div className={'mt-4 text-lg font-bold'}>
                                            {restaurant.name}
                                        </div>
                                        <div className={'flex my-1 text-sm'}>
                                            <MdOutlineStar style={{color: '#FACB0F', marginLeft: '2px'}}/>
                                            {` ${restaurant.star} `}
                                            {` (${restaurant.rate}) `}
                                        </div>
                                        <div className={'my-1 text-sm text-gray5-color'}>
                                            {restaurant.otherCats.map(cat => cat)}
                                        </div>
                                        <div className={'flex text-xs my-4'}>
                                            <Image src={restaurant.delivery.icon} alt={''} width={16} height={16}
                                                   style={{marginLeft: '4px'}}/>
                                            {` ${restaurant.delivery.type} `}
                                            {` ${restaurant.delivery.price}  تومان`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Slide