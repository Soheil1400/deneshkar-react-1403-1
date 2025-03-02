import {DATABASE} from "@/src/data/data";
import Image from "next/image";

const Page = ({params: {restaurantId}}: { params: { restaurantId: string } }) => {
    const [restaurantData] = DATABASE.restaurants.filter(res => res.id === +restaurantId)
    const foods = DATABASE.foods.filter(food => food.id !== +restaurantId)

    return (
        <div className={'flex w-full justify-center flex-wrap p-1 md:p-4 bg-surface-main'}>
            <div className={'flex max-w-7xl flex-wrap w-full my-16'}>
                <div className={'w-full'}>
                    {'title'}
                </div>
                <div className={'flex flex-wrap w-full md:w-1/4 p-4'}>
                    <div className={'flex w-full align-middle h-20'}>
                        <div className={'w-20 h-20 rounded-xl ml-4 border-4 border-solid border-white'}>
                            <Image src={restaurantData.image} alt={restaurantData.name} width={100} height={100}
                                   style={{width: '100%', height: '100%', borderRadius: '12px'}}/>
                        </div>
                        <div className={'flex flex-col justify-center'}>
                            <div>
                                {'جدید'}
                            </div>
                            <div className={'font-bold mt-4'}>
                                {restaurantData.name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-wrap w-full md:w-2/4 p-4'}>
                    <div className={'w-full rounded-t-xl bg-white py-4 border-solid border-surface-dark'}
                         style={{borderWidth: '0.5px', borderBottom: 'none'}}>
                        <div className={'text-sm text-center'}>
                            {'غذا ها'}
                        </div>
                    </div>
                    {
                        foods.map(food => (
                            <div
                                className={'flex flex-wrap w-full md:w-1/2 bg-white p-4 border-solid border-0 border-surface-dark'}
                                style={{borderWidth: '1px'}} key={food.id}>
                                <div className={'flex justify-between w-full'}>
                                    <div className={'flex flex-col justify-center pl-4'}>
                                        <div className={' font-bold'}>
                                            {food.name}
                                        </div>
                                        <div className={'text-xs'}>
                                            {food.desc}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={'w-28 h-28 rounded-xl'}>
                                            <Image src={food.image} alt={food.name} width={100} height={100}
                                                   style={{width: '100%', height: '100%', borderRadius: '12px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={'flex justify-between w-full mt-4 align-middle'}>
                                    <p className={'text-sm mt-2'}>
                                        {`${food.price} تومان`}
                                    </p>
                                    <div
                                        className={'bg-white shadow-shadows-modal px-8 py-2 rounded-2xl text-primary-main cursor-pointer text-sm'}>
                                        {'افزودن'}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={'w-full md:w-1/4 p-4'}>
                    <div className={'w-full rounded-xl px-4 py-4 bg-white text-sm shadow-shadows-small'}>
                        {'ارسال رایگان'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page