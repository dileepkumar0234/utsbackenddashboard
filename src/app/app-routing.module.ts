import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TaxCenterComponent } from './tax-center/tax-center.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TaxServicesComponent } from './tax-services/tax-services.component';
import { ProfileComponent } from './profile/profile.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { UsTaxServicesComponent } from './us-tax-services/us-tax-services.component';
import { IndianTaxServicesComponent } from './indian-tax-services/indian-tax-services.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserUploadComponent } from './user-upload/user-upload.component';
import { UserRefferralComponent } from './user-refferral/user-refferral.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'tax-center', component: TaxCenterComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'tax-services', component: TaxServicesComponent },
  { path: 'us-tax-services', component: UsTaxServicesComponent },
  { path: 'indian-tax-services', component: IndianTaxServicesComponent },
  { path: 'profile', component: ProfileComponent },  
  {path: 'refer-a-friend', component: ReferFriendComponent },
  {path: 'privacy-policy', component: PrivacyPolicyComponent },
  {path: 'terms-conditions', component: TermsConditionsComponent },
  {path: 'disclaimer', component: DisclaimerComponent },
  {path: 'user-dashboard', component: UserDashboardComponent },
  {path: 'user-dashboard/profile', component: UserProfileComponent },
  {path: 'user-dashboard/upload', component: UserUploadComponent },
  {path: 'user-dashboard/refferral', component: UserRefferralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]   
})
export class AppRoutingModule { }