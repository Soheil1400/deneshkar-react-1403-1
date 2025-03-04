import { MdKeyboardArrowLeft } from "react-icons/md";

const Breadcrumb = ({title}: {title: string}) => {
    return(
        <div className={'flex w-full mb-4 items-center'}>
            <p className={'text-sm text-gray-400'}>
                {'اسنپ فود'}
            </p>
            <MdKeyboardArrowLeft className={'ml-3 text-gray-400'}/>
            <p className={'text-sm'}>
                {title}
            </p>
        </div>
    )
}

export default Breadcrumb