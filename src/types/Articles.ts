import {Types} from 'mongoose';

export default interface Article{
    authorID: Types.ObjectId,
    title: string,
    description: string,
    text: string,
    categoryID?: Types.ObjectId,
    _id?: Types.ObjectId,
    __v?: number
}