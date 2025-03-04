import {Swiper, SwiperSlide} from "swiper/react";
import {DATABASE} from "@/src/data/data";
import SwiperNextButton from "@/src/component/SwiperNextButton";
import 'swiper/css';
import RestaurantCard from "@/src/component/RestaurantCard";

const Slide = () => {
    return (
        <div className="slide-container">
            <div className="slide-header">
                <div className="slide-title">{'تازه‌ها در اسنپ‌فود'}</div>
            </div>
            <div className="slide-wrapper">
                <Swiper spaceBetween={20} slidesPerView={4} breakpoints={{
                    320: {slidesPerView: 1},
                    1024: {slidesPerView: 4}
                }}>
                    <SwiperNextButton/>
                    {DATABASE.restaurants.map(restaurant => (
                        <SwiperSlide key={restaurant.id}>
                            <RestaurantCard restaurant={restaurant}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Slide;
