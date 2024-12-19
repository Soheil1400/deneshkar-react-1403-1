import {MdOutlineShoppingBag} from "react-icons/md";
import Image from "next/image";
import ContactUsImage from "@/public/images/shop.png";
import PrimaryButton from "@/src/component/PrimaryButton";

const ContactUs = () => {
    return(
        <div className={'flex max-w-7xl flex-wrap w-full my-16'}>
            <div className={'flex justify-between rounded-xl p-8 bg-body-color w-full'}>
                <div className={'w-1/2'}>
                    <div className={'text-3xl font-bold text-carbon-main'}>
                        {'صاحب کسب و کار هستید؟'}
                    </div>
                    <div className={'my-8 text-xl text-carbon-main'}>
                        {'با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.'}
                    </div>
                    <div>
                        <PrimaryButton>
                            <MdOutlineShoppingBag style={{marginLeft: '4px', marginTop: '4px'}}/>
                            {'ثبت نام فروشندگان'}
                        </PrimaryButton>
                    </div>
                </div>
                <div className={'w-1/2 flex justify-end'}>
                    <Image src={ContactUsImage} alt={''} width={350} height={350} style={{marginTop: '-124px'}}/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs