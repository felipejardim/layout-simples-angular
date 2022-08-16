import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LorenComponent } from './pages/loren/loren.component';
import { MussunComponent } from './pages/mussun/mussun.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'loren', component: LorenComponent},
  {path: 'mussun', component: MussunComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
