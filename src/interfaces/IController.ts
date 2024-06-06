import { FilterQuery, UpdateQuery } from "mongoose"

export default interface IController <T> {
    create(data : T): Promise<T>
    read(filter: FilterQuery<T>): T[]
    readOne(filter: FilterQuery<T>): Promise<T | null>
    update(filter: FilterQuery<T>, newData:UpdateQuery<T>): T
    del(filter: FilterQuery<T>): boolean
}