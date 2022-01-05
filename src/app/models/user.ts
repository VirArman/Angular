import { IGuest } from ".";

export interface IUser{
    rangeDate:string,
    firstname:string,
    lastname:string,
    email:string,
    guests:IGuest[],
}