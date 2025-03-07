import {DATABASE} from "@/src/data/data";
import RestaurantCard from "@/src/component/RestaurantCard";
import Breadcrumb from "@/src/component/Breadcrumb";
import {RestaurantTypeData} from "@/src/model/product";

interface Props {
    params: Promise<{ categoryId: string }>
}

export default async function Page({params}: Props) {
    const {categoryId} = await params
    const category = DATABASE.cats.find(cat => cat.id === +categoryId)?.title as string
    const restaurants = DATABASE.restaurants.filter(res => res.catId.includes(+categoryId)) as RestaurantTypeData[]
    const hasEmptyRestaurants = restaurants.length === 0

    return (
        <div className={'flex w-full justify-center flex-wrap p-1 md:p-4'}>
            <div className={'flex flex-wrap max-w-7xl w-full my-16'}>
                <Breadcrumb title={category}/>
                {
                    hasEmptyRestaurants ?
                        <p className={'text-xl text-gray-400'}>
                            {'رستورانی در این دسته بندی وجود ندارد :('}
                        </p>
                        :
                        restaurants.map(restaurant => (
                            <div className={'w-full md:w-1/4 p-2'}>
                                <RestaurantCard restaurant={restaurant}/>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}