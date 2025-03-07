interface DeliveryType {
    icon: string,
    type: string,
    price: number,
}

export interface RestaurantTypeData {
    id: number,
    catId: number[],
    otherCats: string[],
    name: string,
    star: number,
    rate: number,
    logo: string,
    image: string,
    delivery: DeliveryType,
    address: string,
    workTime: string,
    pay: string,
    tax: number,
    basketminimum: string
}

export interface FoodTypeData {
    id: number,
    catId: number[],
    subCatId: number[],
    restId: number,
    restCatId: number,
    name: string,
    image: string,
    price: number,
    rate: number,
    desc: string,
}