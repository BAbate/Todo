import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

export const routingComponent= [ContactComponent,HomeComponent,NotfoundComponent];