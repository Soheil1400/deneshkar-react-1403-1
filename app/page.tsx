'use client'
import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import {MdArrowBackIosNew, MdOutlineStar} from "react-icons/md";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';

const Categories = () => {
    return (
        <div className={'flex max-w-7xl flex-wrap w-full'}>
            <div className={'w-full my-8 font-bold text-carbon-light'}>
                {'دسته بندی ها'}
            </div>
            <div className={'flex flex-wrap w-full'}>
                {DATABASE.cats.map(cat => (
                    <div className={'w-1/6 mb-8'} key={cat.id}>
                        <div
                            className={'border-white border-solid border-4 rounded-xl shadow-shadows-medium h-24 w-3/4 relative cursor-pointer hover:shadow-shadows-high'}>
                            <Image src={cat.img} alt={cat.title} width={100} height={100}
                                   style={{width: '100%', height: '100%', borderRadius: '12px'}}/>
                            <div
                                className={'flex absolute bg-white bottom-0 rounded-tl-xl rounded-br-xl px-3 py-1 -right-1 text-sm'}>
                                {cat.title}
                                <MdArrowBackIosNew style={{color: '#ff00a6', marginRight: '8px', marginTop: '2px'}}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const SwiperNextButton = () => {
    const swiper = useSwiper();
    return (
        <div
            className={'rounded-full z-50 p-4 bg-white cursor-pointer shadow-shadows-medium hover:shadow-shadows-high absolute top-36 -left-4'}
            onClick={() => swiper.slideNext()}>
            <MdArrowBackIosNew style={{color: '#ff00a6'}}/>
        </div>
    )
}

const Slide = () => {
    return (
        <div className={'flex max-w-7xl flex-wrap w-full'}>
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


export default function Home() {
    return (
        <div className={'flex w-full justify-center flex-wrap'}>
            <Categories/>
            <Slide/>
        </div>
    );
}
