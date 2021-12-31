import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AllRecordsComponent } from './components/all-records/all-records.component';
import { AssignedFileNumberComponent } from './components/assigned-file-number/assigned-file-number.component';
import { ToBeAssignedComponent } from './components/to-be-assigned/to-be-assigned.component';
import { BasicInfoPendingComponent } from './components/basic-info-pending/basic-info-pending.component';
import { SchedulingPendingComponent } from './components/scheduling-pending/scheduling-pending.component';
import { InterviewPendingComponent } from './components/interview-pending/interview-pending.component';
import { DocumentsUploadPendingComponent } from './components/documents-upload-pending/documents-upload-pending.component';
import { OtherDocsPendingComponent } from './components/other-docs-pending/other-docs-pending.component';
import { PreparationPendingComponent } from './components/preparation-pending/preparation-pending.component';
import { PreSynopsysPendingComponent } from './components/pre-synopsys-pending/pre-synopsys-pending.component';
import { SynopsysPendingComponent } from './components/synopsys-pending/synopsys-pending.component';
import { PaymentPendingComponent } from './components/payment-pending/payment-pending.component';
import { ReviewUploadPendingComponent } from './components/review-upload-pending/review-upload-pending.component';
import { ReviewConfirmationPendingComponent } from './components/review-confirmation-pending/review-confirmation-pending.component';
import { EFilingPendingComponent } from './components/e-filing-pending/e-filing-pending.component';
import { CustomDataTableComponent } from './components/custom-data-table/custom-data-table.component';
import { GuestGaurdService } from './auth/guest-gaurd.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserNavbarComponent,
    SidebarComponent,
    AllRecordsComponent,
    AssignedFileNumberComponent,
    ToBeAssignedComponent,
    BasicInfoPendingComponent,
    SchedulingPendingComponent,
    InterviewPendingComponent,
    DocumentsUploadPendingComponent,
    OtherDocsPendingComponent,
    PreparationPendingComponent,
    PreSynopsysPendingComponent,
    SynopsysPendingComponent,
    PaymentPendingComponent,
    ReviewUploadPendingComponent,
    ReviewConfirmationPendingComponent,
    EFilingPendingComponent,
    CustomDataTableComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule

  ],
  providers: [AuthService, AuthGuardService, GuestGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
