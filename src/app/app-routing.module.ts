import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';

import { GuardGuard } from './auth/guard.guard';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'index', component: IndexComponent, canActivate: [GuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
