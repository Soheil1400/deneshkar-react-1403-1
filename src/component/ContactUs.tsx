import Image from "next/image";
import ContactUSImage from '@/public/images/shop.png'
import {MdOutlineShoppingBag} from "react-icons/md";

const ContactUs = () => {
    return(
        <div className={'flex flex-wrap w-full my-16 max-w-7xl'}>
            <div className={'flex justify-between rounded-xl p-8 bg-body-color w-full'}>
                <div className={'w-full md:w-1/2'}>
                    <div className={'text-3xl food-bold text-carbon-main'}>
                        {'صاحب کسب و کار هستید؟'}
                    </div>
                    <div className={'my-8 text-xl text-carbon-main'}>
                        {'با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.'}
                    </div>
                    <div>
                        <button className={'flex bg-primary-main text-white px-3 py-2 rounded-lg text-xl items-center'}>
                            {'ثبت نام فروشندگان'}
                            <MdOutlineShoppingBag/>
                        </button>
                    </div>
                </div>
                <div className={'hidden md:w-1/2 md:flex justify-end'}>
                    <Image src={ContactUSImage} alt={'contact-us'} width={350} height={350}/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs