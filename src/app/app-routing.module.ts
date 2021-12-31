import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { GuestGaurdService } from './auth/guest-gaurd.service';
import { AllRecordsComponent } from './components/all-records/all-records.component';
import { AssignedFileNumberComponent } from './components/assigned-file-number/assigned-file-number.component';
import { BasicInfoPendingComponent } from './components/basic-info-pending/basic-info-pending.component';
import { DocumentsUploadPendingComponent } from './components/documents-upload-pending/documents-upload-pending.component';
import { EFilingPendingComponent } from './components/e-filing-pending/e-filing-pending.component';
import { EmailsComponent } from './components/emails/emails.component';
import { InterviewPendingComponent } from './components/interview-pending/interview-pending.component';
import { LoginHistoryComponent } from './components/login-history/login-history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OtherDocsPendingComponent } from './components/other-docs-pending/other-docs-pending.component';
import { PaymentPendingComponent } from './components/payment-pending/payment-pending.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PreSynopsysPendingComponent } from './components/pre-synopsys-pending/pre-synopsys-pending.component';
import { PreparationPendingComponent } from './components/preparation-pending/preparation-pending.component';
import { RefferalsComponent } from './components/refferals/refferals.component';
import { ReviewConfirmationPendingComponent } from './components/review-confirmation-pending/review-confirmation-pending.component';
import { ReviewUploadPendingComponent } from './components/review-upload-pending/review-upload-pending.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { SchedulingPendingComponent } from './components/scheduling-pending/scheduling-pending.component';
import { SiteSettingsComponent } from './components/site-settings/site-settings.component';
import { SynopsysPendingComponent } from './components/synopsys-pending/synopsys-pending.component';
import { ToBeAssignedComponent } from './components/to-be-assigned/to-be-assigned.component';
import { ToCallComponent } from './components/to-call/to-call.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate : [GuestGaurdService]},
  {path : "", component : HomeComponent, canActivate : [AuthGuardService], children : [
    { path: 'all-records', component: AllRecordsComponent, canActivate : [AuthGuardService], data: {
      roles: [
        Role.SUPER_ADMIN,
      ]
    }},
    { path: 'assigned-file', component: AssignedFileNumberComponent, canActivate : [AuthGuardService], data: {
      roles: [
        Role.SUPER_ADMIN, Role.ADMIN
      ]
    }},
    { path: 'to-be-assigned', component: ToBeAssignedComponent, canActivate : [AuthGuardService], data: {
      roles: [
        Role.SUPER_ADMIN,
      ]
    }},
    { path: 'basic-info-pending', component: BasicInfoPendingComponent},
    { path: 'scheduling-pending', component: SchedulingPendingComponent},
    { path: 'interview-pending', component: InterviewPendingComponent},
    { path: 'documents-upload-pending', component: DocumentsUploadPendingComponent},
    { path: 'other-docs-pending', component: OtherDocsPendingComponent},
    { path: 'preparation-pending', component: PreparationPendingComponent},
    { path: 'pre-synopsys-pending', component: PreSynopsysPendingComponent},
    { path: 'synopsys-pending', component: SynopsysPendingComponent},
    { path: 'payment-pending', component: PaymentPendingComponent},
    { path: 'review-upload-pending', component: ReviewUploadPendingComponent},
    { path: 'review-confirmation-pending', component: ReviewConfirmationPendingComponent},
    { path: 'e-filing-assigned', component: EFilingPendingComponent},
    { path: 'site-settings', component: SiteSettingsComponent},
    { path: 'login-history', component: LoginHistoryComponent},
    { path: 'payments', component: PaymentsComponent},
    { path: 'referrals', component: RefferalsComponent},
    { path: 'schedules', component: SchedulesComponent},
    { path: 'emails', component: EmailsComponent},
    { path: 'to-call', component: ToCallComponent},
  ]},
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]   
})
export class AppRoutingModule { }