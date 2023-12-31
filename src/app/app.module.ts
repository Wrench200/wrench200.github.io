import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { PNF404Component } from './components/pnf404/pnf404.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarService } from './Services/navbar.service';
import { InitialsPipe } from './Pipes/initials.pipe';
import { LoaderComponent } from './loader/loader.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndividualrestaurantComponent } from './components/individualrestaurant/individualrestaurant.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { TittlePipe } from './Pipes/tittle.pipe';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OrderComponent } from './components/order/order.component';

 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BreadcrumbsComponent,
    HomeComponent,
    RestaurantsComponent,
    PNF404Component,
    RegisterComponent,
    LoginComponent,
    InitialsPipe,
    LoaderComponent,
    DashboardComponent,
    IndividualrestaurantComponent,
    FavouritesComponent,
    TittlePipe,
    AboutUsComponent,
    ContactusComponent,
    OrderComponent
   
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
   
    
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
