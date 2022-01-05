import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HeaderSevice } from 'src/app/services/header.service';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-select-dates',
  templateUrl: './select-dates.component.html',
  styleUrls: ['./select-dates.component.scss']
})
export class SelectDatesComponent implements OnInit {
  public rangeDate:null|string =null;
  public strRangeDate:string|undefined;


  constructor(

    private _usersService: UsersService,
    private _router: Router,
    private _headerService:HeaderSevice
  ) { }

  ngOnInit(): void {
    this._headerService.subject.next(1)
  }


  

  onChange(result: Date): void {
    console.log('onChange: ', result);
    this.strRangeDate=this.rangeDate?.toString();
    this._usersService.changeStatus('date',true)
  }



  public onNext(): void {
    if (!(this.rangeDate)) {
      console.log('invalid');
      
      return
    }
  
   
    this._usersService.addDate(this.rangeDate.toString())
    this._router.navigate(['personal-details']);
  }
}
 