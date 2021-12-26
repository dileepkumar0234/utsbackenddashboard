import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { AllRecordsComponent } from './components/all-records/all-records.component';
import { AssignedFileNumberComponent } from './components/assigned-file-number/assigned-file-number.component';
import { BasicInfoPendingComponent } from './components/basic-info-pending/basic-info-pending.component';
import { DocumentsUploadPendingComponent } from './components/documents-upload-pending/documents-upload-pending.component';
import { EFilingPendingComponent } from './components/e-filing-pending/e-filing-pending.component';
import { InterviewPendingComponent } from './components/interview-pending/interview-pending.component';
import { OtherDocsPendingComponent } from './components/other-docs-pending/other-docs-pending.component';
import { PaymentPendingComponent } from './components/payment-pending/payment-pending.component';
import { PreSynopsysPendingComponent } from './components/pre-synopsys-pending/pre-synopsys-pending.component';
import { PreparationPendingComponent } from './components/preparation-pending/preparation-pending.component';
import { ReviewConfirmationPendingComponent } from './components/review-confirmation-pending/review-confirmation-pending.component';
import { ReviewUploadPendingComponent } from './components/review-upload-pending/review-upload-pending.component';
import { SchedulingPendingComponent } from './components/scheduling-pending/scheduling-pending.component';
import { SynopsysPendingComponent } from './components/synopsys-pending/synopsys-pending.component';
import { ToBeAssignedComponent } from './components/to-be-assigned/to-be-assigned.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/all-records', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'all-records', component: AllRecordsComponent},
  { path: 'assigned-file', component: AssignedFileNumberComponent},
  { path: 'to-be-assigned', component: ToBeAssignedComponent},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]   
})
export class AppRoutingModule { }