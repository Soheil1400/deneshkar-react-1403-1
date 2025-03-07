import {MdKeyboardArrowLeft} from "react-icons/md";

interface Props {
    title: string
}

const Breadcrumb = ({title}: Props) => {
    return(
        <div className={'flex w-full mb-4 items-center'}>
            <p className={'text-xs text-gray-400'}>
                {'اسنپ فود'}
            </p>
            <MdKeyboardArrowLeft className={'ml-1 text-gray-400'}/>
            <p className={'text-xs'}>
                {title}
            </p>
        </div>
    )
}

export default Breadcrumb