import {useSwiper} from "swiper/react";
import {MdArrowBackIosNew} from "react-icons/md";

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

export default SwiperNextButton