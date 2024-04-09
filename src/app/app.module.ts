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
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagazinComponent,
    ElectroniceComponent,
    HaineComponent,
    AutovehiculeComponent,
    VanzariComponent,
    HelpCenterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
