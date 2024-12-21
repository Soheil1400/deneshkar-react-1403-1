'use client'
import {useSelector} from "react-redux";
import Image from "next/image";

const Page = () => {
    const history = useSelector(state => state.history);

    return(
        <div>
            <div>
                {'تاریخچه سفارشات'}
            </div>
            {history.map( items => (
                <div>
                    {items.map(item => (
                        <div>
                            <div>
                                <Image src={item.image} alt={item.name} width={100} height={100}/>
                            </div>
                            <div>
                                {item.name}
                            </div>
                            <div className={'flex items-center'}>
                                <div>
                                    {`تعداد ${item.count} عدد`}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={'w-12 h-2 bg-red-500 '}/>
                </div>
            ))}
        </div>
    )
}

export default Page