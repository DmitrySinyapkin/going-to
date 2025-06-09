export const getStringFromObjArray = (array: any[], key: string) => 
    array.reduce((acc, item, i, arr) => i === arr.length - 1 ? acc + item[key] : acc + item[key] + ', ', '')
