import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import {convertToPersian} from "@/src/utils/convertToPersian";

const Menu = ({restaurantId}) => {
    const foods = DATABASE.foods.filter( food => food.id !== +restaurantId)
    console.log(foods, 'foods')
    return(
        <div className={'flex flex-wrap w-full md:w-2/4 p-4'}>
            <div className={'w-full rounded-t-xl bg-white py-4 border-solid border-surface-dark text-sm text-center'}  style={{
                borderWidth: '0.5px',
                borderBottom: 'none',
            }}>
                {'غذا ها'}
            </div>
            {foods.map((food)=>(
                <div className={'flex flex-wrap w-full md:w-1/2 bg-white p-4 border-solid border-surface-dark'} key={food.id} style={{
                    borderWidth: '0.5px',
                }}>
                    <div className={'flex justify-between w-full'}>
                        <div className={'flex flex-col justify-center font-bold pl-4'}>
                            <div>
                                {food.name}
                            </div>
                            <div className={'text-xs mt-2'}>
                                {food.desc}
                            </div>
                        </div>
                        <div>
                            <div className={'w-28 h-28 rounded-xl'}>
                                <Image src={food.image} alt={food.name} width={100} height={100} style={{
                                    width: '100%', height: '100%', borderRadius: '12px'
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-between w-full mt-4 items-center'}>
                        <p className={'text-sm'}>
                            {`${convertToPersian(food.price)}  تومان `}
                        </p>
                        <div className={'bg-white shadow-shadows-modal px-8 py-2 rounded-2xl text-primary-main cursor-pointer hover:bg-primary-main hover:text-white'}>
                            {'افزودن'}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Menu