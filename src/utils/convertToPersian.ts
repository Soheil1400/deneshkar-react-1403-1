export const convertToPersian = (num: number, separator = true) => {
    const currentNum = separator ? num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : num
    const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return currentNum?.toString()?.replace(/[0-9]/g, function (w) {
        return id[+w]
    });
}