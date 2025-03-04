import {MdOutlineShoppingBag} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-logo">
                    <Link href={'/'}>
                        <Image src={"/images/images-home/logo.svg"} width={68} height={34} alt="logo"/>
                    </Link>
                </div>
                <Link href={'/orders'}>
                    <div className="header-link">
                        <MdOutlineShoppingBag className="header-icon"/>
                        <p className="header-text">{'سفارش ها'}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
