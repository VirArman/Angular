import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

import { UsersService } from '../services/users.service';

@Injectable()
export class DetailsGuardService implements CanActivate{
    constructor(
        private _router:Router,
        private _usersService:UsersService
      ){}
      canActivate(route: ActivatedRouteSnapshot, ): boolean {
          const status=this._usersService.getStatus()
          if (status.date) {
              return true
          } else {
              return false
          }
      }
}