import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserDetail } from 'src/app/models';
import { HeaderSevice } from 'src/app/services/header.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {
  public detailsFormGroup!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _users: UsersService,
    private _router: Router,
    private _headerService:HeaderSevice
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._headerService.subject.next(2)
  }

  private _initForm(): void {
    this.detailsFormGroup = this._fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-z]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-z]+$')]],
      email: ['', [Validators.required, Validators.email]]
    })
    this.detailsFormGroup.valueChanges.subscribe((data) => {
    })
  }

  public onNext(): void {
    if (this.detailsFormGroup.invalid) {
      console.log('invalid');

      return
    }

    const user: IUserDetail = this.detailsFormGroup.getRawValue();
    this._users.addUserInfo(user)
    this._router.navigate(['guests']);
  }

  public onPrevious():void{
    this._router.navigate(['select-dates']);
  }


}
