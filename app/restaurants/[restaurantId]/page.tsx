import {DATABASE} from "@/src/data/data";
import Breadcrumb from "@/src/component/Breadcrumb";
import Image from "next/image";
import {convertToPersian} from "@/src/utils/convertToPersian";
import Menu from "@/src/component/Menu";

interface Props {
    params: Promise<{ restaurantId: string }>
}

export default async function Page({params}: Props) {
    const {restaurantId} = await params
    const [restaurantData] = DATABASE.restaurants.filter(res => res.id === +restaurantId)
    return (
        <div className={'flex w-full justify-center flex-wrap p-1 md:p-4'}>
            <div className={'flex flex-wrap w-full max-w-7xl my-16'}>
                <Breadcrumb title={restaurantData.name}/>
                <div className={'w-full md:w-1/4 p-4 flex flex-wrap'}>
                    <div className={'flex w-full items-center h-20'}>
                        <div className={'w-20 h-20 rounded-xl border-4 border-solid border-white ml-4'}>
                            <Image src={restaurantData.image} alt={restaurantData.name} width={100} height={100}
                                   style={{
                                       width: '100%', height: '100%', borderRadius: '12px',
                                   }}/>
                        </div>
                        <div className={'font-bold mt-4'}>
                            {restaurantData.name}
                        </div>
                    </div>
                </div>
                <Menu restaurantId={restaurantId}/>
                <div className={'w-full md:w-1/4 p-4 flex flex-wrap'}>
                    <div className={'flex w-full rounded-xl px-4 py-4 bg-white text-sm shadow-shadows-small items-center justify-center h-16'}>
                        <Image src={restaurantData.delivery.icon} alt={''} width={16} height={16} style={{
                            marginLeft: '4px'
                        }}/>
                        {` ${restaurantData.delivery.type}`}
                        {` ${convertToPersian(restaurantData.delivery.price)}`}
                    </div>
                </div>
            </div>
        </div>
    )
}