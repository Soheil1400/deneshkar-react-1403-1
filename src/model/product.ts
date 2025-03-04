export interface Delivery {
    icon: string;
    type: string;
    price: number;
}

export interface RestaurantTypeData {
    id: number;
    catId: number[];
    otherCats: string[];
    name: string;
    star: number;
    rate: number;
    logo: string;
    image: string;
    delivery: Delivery;
    address: string;
    worktime: string;
    pay: string;
    tax: number;
    basketminimum: string;
}

export interface FoodTypeData {
    id: number;
    catId: number[];
    subCatId: number[];
    restId: number;
    restCatId: number;
    name: string;
    image: string;
    price: number;
    rate: number;
    desc: string;
    count: number
}


export interface CartTypeData {
    restaurantData: {
        name: string,
        image: string,
        address: string,
    },
    purchaseData: FoodTypeData[],
    totalPrice: number
}