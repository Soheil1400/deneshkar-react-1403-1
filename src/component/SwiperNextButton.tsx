import {MdArrowBackIosNew} from "react-icons/md";
import {useSwiper} from "swiper/react";


const SwiperNextButton = () => {
    const swiper = useSwiper()
    return (
        <div onClick={() => swiper.slideNext()}
            className={'rounded-full z-50 p-4 bg-white cursor-pointer shadow-shadows-medium hover:shadow-shadows-high absolute top-36 left-0'}>
            <MdArrowBackIosNew style={{color: '#ff00a6'}}/>
        </div>
    )
}

export default SwiperNextButton