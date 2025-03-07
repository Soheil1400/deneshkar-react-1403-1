import Image from "next/image";
import {MdOutlineShoppingBag} from "react-icons/md";
import Link from "next/link";

const Header = () => {
    return (
        <div className={'w-full flex bg-white p-4 fixed shadow-shadows-small z-50'}>
            <div className={'w-full flex justify-between'}>
                <div className={'cursor-pointer'}>
                    <Link href="/">
                        <Image src={'/images/images-home/logo.svg'} alt={'logo'} width={68} height={34}/>
                    </Link>
                </div>
                <Link href={'/orders'}>
                    <div className={'flex items-center'}>
                        <MdOutlineShoppingBag className={'text-xl'}/>
                        <p className={'text-sm'}>
                            {'سفارشات'}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header