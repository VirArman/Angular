import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGuest, IUser } from 'src/app/models';
import { HeaderSevice } from 'src/app/services/header.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(
    private _router:Router,
    private _usersService:UsersService,
    private _headerService:HeaderSevice
  ) { }
  
  public user:IUser=this._usersService.getUserData()

  public guests:IGuest[]=[];

  ngOnInit(): void {
    this._headerService.subject.next(4)
    this.getGuests()
    console.log(this.guests);
    
  }
  getGuests(){
    this.guests=this._usersService.getUserData().guests
  }

  public onSubmit():void{
    this._usersService.addUser().subscribe(()=>{
      console.log('user successfully created');
    })
  }
  public onPrevious():void{
    this._router.navigate(['guests']);
  }

}
