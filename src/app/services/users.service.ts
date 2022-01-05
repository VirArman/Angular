import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGuest, Iprogress, IUser, IUserDetail } from '../models';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private _baseURL = "  http://localhost:3000/users"
    private _progressStatus:Iprogress={
        date:false,
        personalData:false,
        guests:false
    }
    public userData: IUser = {
        rangeDate:'',
        firstname: '',
        lastname: '',
        email: '',
        guests: [],
    }

    constructor(
        private _httpClient: HttpClient
    ) { }

    public addUserInfo(userInfo: IUserDetail): void {
        this.userData.firstname = userInfo.firstname;
        this.userData.lastname = userInfo.lastname;
        this.userData.email = userInfo.email;
    }

    public addGuestsinfo(guestsInfo: IGuest[]): void {
        this.userData.guests=guestsInfo;
    }

    public addDate(date:string ): void {
        this.userData.rangeDate = date;
    }

    public getAllUsers() {
        return this._httpClient.get<IUser[]>(this._baseURL)
    }

    public getUserData():IUser {
        return this.userData
    }

    public addUser() {
        return this._httpClient.post<void>(this._baseURL, this.userData)
    }

    public getStatus():Iprogress {
       return this._progressStatus
    }

    public changeStatus(name:string,status:boolean):void{
        if (name==="date") {
            this._progressStatus.date=status;
        }
        if (name==="personalData") {
            this._progressStatus.personalData=status;
        }
        if (name==="guests") {
            this._progressStatus.guests=status;
        }
    }
}