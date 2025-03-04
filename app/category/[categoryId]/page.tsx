import {DATABASE} from "@/src/data/data";
import RestaurantCard from "@/src/component/RestaurantCard";
import Breadcrumb from "@/src/component/Breadcrumb";

type Params = Promise<{ categoryId: string }>

const Page = async (props: { params: Params }) => {
    const params = await props.params;
    const category = DATABASE.cats.find(cat => cat.id === +params.categoryId)?.title as string;
    const restaurants = DATABASE.restaurants.filter(res => res.catId.includes(+params.categoryId))
    const hasEmptyRestaurants = restaurants.length === 0

    return (
        <div className="page-container">
            <div className="content-wrapper">
                <Breadcrumb title={category}/>
                {
                    hasEmptyRestaurants ?
                        <p className={'text-xl text-gray-400'}>
                            {'رستورانی در این درسته بندی وجود ندارد :('}
                        </p>
                        :
                        restaurants.map((restaurant) => (
                            <div className={'w-full md:w-1/4 p-2'}>
                                <RestaurantCard restaurant={restaurant}/>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default Page