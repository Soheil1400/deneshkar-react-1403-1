import { addProduct, deleteProduct } from "@/src/redux/slice/productSlice";
import { MdAdd, MdHorizontalRule } from "react-icons/md";
import { convertToPersian } from "@/src/utils/convertToPersian";
import React from "react";
import { useDispatch } from "react-redux";
import { FoodTypeData } from "@/src/model/product";

const AddFood = ({ food }: { food: FoodTypeData }) => {
    const dispatch = useDispatch();

    return (
        <div className="add-food-container">
            <div onClick={() => dispatch(deleteProduct(food))} className="btn-circle">
                <MdHorizontalRule />
            </div>
            <p className="food-counter">
                {convertToPersian(food.count)}
            </p>
            <div onClick={() => dispatch(addProduct(food))} className="btn-circle">
                <MdAdd />
            </div>
        </div>
    );
};

export default AddFood;
