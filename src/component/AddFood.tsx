import {MdAdd, MdDelete, MdHorizontalRule} from "react-icons/md";
import {FoodTypeData} from "@/src/model/product";
import {convertToPersian} from "@/src/utils/convertToPersian";
import {useDispatch} from "react-redux";
import {addProduct, clearProduct, deleteProduct} from "@/src/redux/slice/cartSlice";
import React from "react";

interface Props {
    cartFood: FoodTypeData
}

const AddFood = ({cartFood}: Props) => {
    const dispatch = useDispatch();
    return(
        <div className={'flex justify-between min-w-28 items-center'}>
            <div onClick={() => dispatch(deleteProduct(cartFood))} className={'flex w-8 h-8 justify-center items-center bg-white shadow-shadows-medium rounded-full text-primary-main cursor-pointer hover:bg-primary-main hover:text-white text-sm'}>
                {cartFood.count === 1 ? <MdDelete/> : <MdHorizontalRule/>}
            </div>
            <p className={'text-sm font-bold'}>
                {!!cartFood.count && convertToPersian(cartFood.count)}
            </p>
            <div onClick={() => dispatch(addProduct(cartFood))} className={'flex w-8 h-8 justify-center items-center bg-white shadow-shadows-medium rounded-full text-primary-main cursor-pointer hover:bg-primary-main hover:text-white text-sm'}>
                <MdAdd/>
            </div>
        </div>
    )
}

export default AddFood