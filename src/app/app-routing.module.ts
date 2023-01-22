import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { GuestGaurdService } from './auth/guest-gaurd.service';
import { AllRecordsComponent } from './components/all-records/all-records.component';
import { AnalystslistComponent } from './components/analystslist/analystslist.component';
import { EditanalystComponent } from './components/editanalyst/editanalyst.component';
import { AssignedFileNumberComponent } from './components/assigned-file-number/assigned-file-number.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommonDataComponent } from './components/common-data/common-data.component';
import { DetailsComponent } from './components/details/details.component';
import { EmailsComponent } from './components/emails/emails.component';
import { LoginHistoryComponent } from './components/login-history/login-history.component';
import { ForgetpasswordsComponent } from './components/forgetpasswords/forgetpasswords.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { RefferalsComponent } from './components/refferals/refferals.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { SiteSettingsComponent } from './components/site-settings/site-settings.component';
import { ToCallComponent } from './components/to-call/to-call.component';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role';
import { CareersComponent } from './components/careers/careers.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing-home', pathMatch: 'full'},
  {path: 'landing-home', component: DefaultHomeComponent, canActivate : [AuthGuardService]},
  {path: 'login', component: LoginComponent, canActivate : [GuestGaurdService]},
  {path : '', component : HomeComponent, canActivate : [AuthGuardService], children : [
    { path: 'all-records', component: AllRecordsComponent, canActivate : [AuthGuardService], data: {
      roles: [
        Role.SUPER_ADMIN, Role.ADMIN
      ]
    }},
    { path: 'assigned-file', component: AssignedFileNumberComponent, canActivate : [AuthGuardService], data: {
      roles: [
        Role.SUPER_ADMIN, Role.ADMIN
      ]
    }},
    { path: 'to-be-assigned', component: CommonDataComponent, canActivate : [AuthGuardService], data: {
      roles: [
        Role.SUPER_ADMIN,
      ]
    }},
    { path: 'basic-info-pending', component: CommonDataComponent},
    { path: 'scheduling-pending', component: CommonDataComponent},
    { path: 'interview-pending', component: CommonDataComponent},
    { path: 'documents-upload-pending', component: CommonDataComponent},
    { path: 'other-docs-pending', component: CommonDataComponent},
    { path: 'preparation-pending', component: CommonDataComponent},
    { path: 'pre-synopsys-pending', component: CommonDataComponent},
    { path: 'synopsys-pending', component: CommonDataComponent},
    { path: 'payment-pending', component: CommonDataComponent},
    { path: 'review-upload-pending', component: CommonDataComponent},
    { path: 'review-confirmation-pending', component: CommonDataComponent},
    {path : 'e-filing-pending', component: CommonDataComponent},
    {path : 'p-filing-pending', component: CommonDataComponent},
    {path : 'paper-filing-pending', component: CommonDataComponent},
    {path : 'e-filing-complete', component: CommonDataComponent},
    {path : 'p-filing-docs', component: CommonDataComponent},
    {path : 'files-cancelled', component: CommonDataComponent},
    {path : 'analystslist', component: AnalystslistComponent},
    {path : 'editanalyst/:id', component: EditanalystComponent},
    { path: 'site-settings', component: SiteSettingsComponent, canActivate : [AuthGuardService], data: {
      roles: [
        Role.SUPER_ADMIN,
      ]
    }},
    { path: 'login-history', component: LoginHistoryComponent},
    { path: 'forget-passwords', component: ForgetpasswordsComponent},
    
    { path: 'payments', component: PaymentsComponent, canActivate : [AuthGuardService], data: {
      roles: [
        Role.SUPER_ADMIN,
      ]
    }},
    { path: 'referrals', component: RefferalsComponent},
    { path: 'schedules', component: SchedulesComponent},
    { path: 'emails', component: EmailsComponent},
    { path: 'to-call', component: ToCallComponent},
    { path: 'careers', component: CareersComponent},
    { path: 'comments', component: CommentsComponent},
    { path: 'change-password', component: ChangePasswordComponent},
    {path : 'details', component: DetailsComponent},
    {path : 'details/:id', component: DetailsComponent},

  ]},
  { path: '**', component: NotFoundComponent }

  // <a [routerLink]="['/account', 1]">Account 1</a>
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
