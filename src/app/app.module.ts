import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './modules/dashboards/dashboard.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
