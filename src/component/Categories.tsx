import {DATABASE} from "@/src/data/data";
import Link from "next/link";
import Image from "next/image";
import {MdArrowBackIosNew} from "react-icons/md";

const Categories = () => {
    return (
        <div className={'flex flex-wrap max-w-7xl w-full mt-8'}>
            <div className={'w-full my-8 font-bold text-carbon-light'}>
                {'دسته بندی ها'}
            </div>
            <div className={'flex flex-wrap w-full'}>
                {DATABASE.cats.map( cat => (
                    <div className={'flex w-1/2 md:w-1/6 p-2 justify-center'} key={cat.id}>
                        <Link href={`/category/${cat.id}`}>
                            <div className={'relative border-white border-solid border-4 rounded-xl shadow-shadows-medium h-24 w-max md:w-3/4 hover:shadow-shadows-high'}>
                                <Image src={cat.img} alt={cat.title} width={100} height={100} style={{width: '100%', height: '100%', borderRadius: '12px'}}/>
                                <div className={'flex absolute bg-white bottom-0 -right-1 text-sm py-1 px-3 rounded-tl-xl rounded-br-xl'}>
                                    {cat.title}
                                    <MdArrowBackIosNew style={{color: '#ff00a6', marginRight: '8px', marginTop: '2px'}}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories