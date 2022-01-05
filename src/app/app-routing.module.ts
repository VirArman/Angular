import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestsComponent } from './components/guests/guests.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { ReviewComponent } from './components/review/review.component';
import { SelectDatesComponent } from './components/select-dates/select-dates.component';
import { DetailsGuardService } from './guard.services/details.guard.service';


const routes: Routes = [
  {
    path:"select-dates",
    component: SelectDatesComponent,
    
  },
  {
    path:"personal-details",
    component:PersonalDetailComponent,
    
  },
  {
    path:"guests",
    component:GuestsComponent,
    
  },
  {
    path:"review",
    component:ReviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
