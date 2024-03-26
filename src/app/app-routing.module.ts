import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutovehiculeComponent } from './autovehicule/autovehicule.component';
import { ElectroniceComponent } from './electronice/electronice.component';
import { HaineComponent } from './haine/haine.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { VanzariComponent } from './vanzari/vanzari.component';
import { MagazinComponent } from './magazin/magazin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'autovehicule', component: AutovehiculeComponent},
  {path: 'electronice', component: ElectroniceComponent},
  {path: 'haine', component: HaineComponent},
  {path: 'help-center', component: HelpCenterComponent},
  {path: 'magazin', component: MagazinComponent},
  {path: 'vanzari', component: VanzariComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
