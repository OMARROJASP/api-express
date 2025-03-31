import { Car } from "../interface/car.interface";
import ItemModel  from "../models/item";
const iterItem = async(item:Car) => {    
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

export { iterItem };