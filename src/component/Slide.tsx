// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import {DATABASE} from "@/src/data/data";
import RestaurantCard from "@/src/component/RestaurantCard";
import SwiperNextButton from "@/src/component/SwiperNextButton";

const Slide = () => {
    return(
        <div className={'flex flex-wrap w-full max-w-7xl my-16'}>
            <div className={'flex w-full my-4 text-bold text-lg'}>
                    {'تازه ها در اسنپ فود'}
            </div>
            <div className={'flex w-full flex-wrap p-4 relative'}>
                <Swiper spaceBetween={20}
                        slidesPerView={4}
                        breakpoints={{
                            320: {
                                slidesPerView: 1
                            },
                            1024: {
                                slidesPerView: 4
                            }
                        }}
                >
                    <SwiperNextButton/>
                    {DATABASE.restaurants.map( restaurant => (
                        <SwiperSlide key={restaurant.id}>
                            <RestaurantCard restaurant={restaurant}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Slide