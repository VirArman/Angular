import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IGuest } from 'src/app/models';
import { HeaderSevice } from 'src/app/services/header.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
  public guestsFormGroup!: FormGroup;
  public get guests(): FormArray {
    return this.guestsFormGroup?.get('guests') as FormArray;
  };
  constructor(
    private _fb: FormBuilder,
    private _router:Router,
    private _usersService:UsersService,
    private _headerService:HeaderSevice
  ) { }

  ngOnInit(): void {
    this._oninitForm();
    this._headerService.subject.next(3)
  }
  private _oninitForm(): void {
    this.guestsFormGroup = this._fb.group({
      guests: this._fb.array([this.createGuest()])
    })

  }
  public createGuest(): FormGroup {
    return this._fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-z]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-z]+$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  public onAddGuest(): void {
    this.guests.push(this.createGuest());
  }

  public onNext(): void {
    if (this.guestsFormGroup.invalid) {
      return
    }

    const guests: IGuest[] = this.guestsFormGroup.getRawValue();
    this._usersService.addGuestsinfo(guests);
    this._router.navigate(['review']);
  }

  public onPrevious():void{
    this._router.navigate(['personal-details']);
  }
  }

