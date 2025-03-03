import {MdOutlineShoppingBag} from "react-icons/md";
import Image from "next/image";
import ContactUsImage from "@/public/images/shop.png";

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <div className="contact-us-content">
                <div className="contact-us-left">
                    <div className="contact-us-title">
                        {'صاحب کسب و کار هستید؟'}
                    </div>
                    <div className="contact-us-description">
                        {'با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.'}
                    </div>
                    <div>
                        <button className={'contact-us-button'}>
                            {'ثبت نام فروشندگان'}
                            <MdOutlineShoppingBag style={{marginLeft: '4px', marginTop: '4px'}}/>
                        </button>
                    </div>
                </div>
                <div className="contact-us-image-container">
                    <Image src={ContactUsImage} alt={''} width={350} height={350} className="contact-us-image"/>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

