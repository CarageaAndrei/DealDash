import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagazinComponent } from './magazin/magazin.component';
import { ElectroniceComponent } from './electronice/electronice.component';
import { HaineComponent } from './haine/haine.component';
import { AutovehiculeComponent } from './autovehicule/autovehicule.component';
import { VanzariComponent } from './vanzari/vanzari.component';
import { HelpCenterComponent } from './help-center/help-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagazinComponent,
    ElectroniceComponent,
    HaineComponent,
    AutovehiculeComponent,
    VanzariComponent,
    HelpCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
