import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { TaxCenterComponent } from './tax-center/tax-center.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TaxServicesComponent } from './tax-services/tax-services.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { UsTaxServicesComponent } from './us-tax-services/us-tax-services.component';
import { IndianTaxServicesComponent } from './indian-tax-services/indian-tax-services.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserUploadComponent } from './user-upload/user-upload.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserLeftbarComponent } from './user-leftbar/user-leftbar.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TaxpayerInfoComponent } from './taxpayer-info/taxpayer-info.component';
import { SpouseInfoComponent } from './spouse-info/spouse-info.component';
import { DependentsComponent } from './dependents/dependents.component';
import { EmployerInfoComponent } from './employer-info/employer-info.component';
import { UserRefferralComponent } from './user-refferral/user-refferral.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { UserTopbarComponent } from './user-topbar/user-topbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    CareersComponent,
    HomeComponent,
    ContactusComponent,
    FooterComponent,
    TaxCenterComponent,
    TestimonialsComponent,
    TaxServicesComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ReferFriendComponent,
    UsTaxServicesComponent,
    IndianTaxServicesComponent,
    UserDashboardComponent,
    UserProfileComponent,
    UserUploadComponent,
    UserNavbarComponent,
    UserLeftbarComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    TaxpayerInfoComponent,
    SpouseInfoComponent,
    DependentsComponent,
    EmployerInfoComponent,
    UserRefferralComponent,
    DisclaimerComponent,
    UserTopbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
