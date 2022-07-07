import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
const routes: Routes = [
  {path:'land-page',component: LandingPageComponent},
  {path:'edit-profile',component: EditProfileComponent},
  {path: '', redirectTo: '/land-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LandingPageComponent,EditProfileComponent]
