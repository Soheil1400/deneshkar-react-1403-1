import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import {MdArrowBackIosNew} from "react-icons/md";

export default function Home() {
    return (
        <div className={'flex w-full justify-center flex-wrap'}>
            <div className={'max-w-7xl'}>
                <div className={'w-full my-8 font-bold text-carbon-light'}>
                    {'دسته بندی ها'}
                </div>
                <div className={'flex flex-wrap w-full'}>
                    {DATABASE.cats.map(cat => (
                        <div className={'w-1/6 mb-8'} key={cat.id}>
                            <div
                                className={'border-white border-solid border-4 rounded-xl shadow-shadows-medium h-24 w-3/4 relative cursor-pointer hover:shadow-shadows-high'}>
                                <Image src={cat.img} alt={cat.title} width={100} height={100} style={{width:'100%', height: '100%', borderRadius: '12px'}} />
                                <div
                                    className={'flex absolute bg-white bottom-0 rounded-tl-xl rounded-br-xl px-3 py-1 -right-1 text-sm'}>
                                    {cat.title}
                                    <MdArrowBackIosNew style={{color: '#ff00a6', marginRight: '8px', marginTop: '2px'}}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
