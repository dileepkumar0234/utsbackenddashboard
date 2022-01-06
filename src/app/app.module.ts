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
import { CustomDataTableComponent } from './components/custom-data-table/custom-data-table.component';
import { GuestGaurdService } from './auth/guest-gaurd.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SiteSettingsComponent } from './components/site-settings/site-settings.component';
import { RefferalsComponent } from './components/refferals/refferals.component';
import { LoginHistoryComponent } from './components/login-history/login-history.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { EmailsComponent } from './components/emails/emails.component';
import { ToCallComponent } from './components/to-call/to-call.component';
import { IpComponent } from './components/ip/ip.component';
import { DetailsComponent } from './components/details/details.component';
import { BasicInfoComponent } from './components/details/basic-info/basic-info.component';
import { OtherInfoComponent } from './components/details/other-info/other-info.component';
import { ScheduleInfoComponent } from './components/details/schedule-info/schedule-info.component';
import { DownloadDocumentsComponent } from './components/details/download-documents/download-documents.component';
import { UploadDocumentsComponent } from './components/details/upload-documents/upload-documents.component';
import { FileStatusComponent } from './components/details/file-status/file-status.component';
import { ReferralComponent } from './components/details/referral/referral.component';
import { SpouseInfoComponent } from './components/details/other-info/spouse-info/spouse-info.component';
import { EmployerInfoComponent } from './components/details/other-info/employer-info/employer-info.component';
import { DependentsInfoComponent } from './components/details/other-info/dependents-info/dependents-info.component';
import { CommonDataComponent } from './components/common-data/common-data.component';
import { SettingsComponent } from './components/site-settings/settings/settings.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UserCommentsComponent } from './components/details/file-status/user-comments/user-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserNavbarComponent,
    SidebarComponent,
    AllRecordsComponent,
    AssignedFileNumberComponent,
    CustomDataTableComponent,
    NotFoundComponent,
    SiteSettingsComponent,
    RefferalsComponent,
    LoginHistoryComponent,
    PaymentsComponent,
    SchedulesComponent,
    EmailsComponent,
    ToCallComponent,
    IpComponent,
    DetailsComponent,
    BasicInfoComponent,
    OtherInfoComponent,
    ScheduleInfoComponent,
    DownloadDocumentsComponent,
    UploadDocumentsComponent,
    FileStatusComponent,
    ReferralComponent,
    SpouseInfoComponent,
    EmployerInfoComponent,
    DependentsInfoComponent,
    CommonDataComponent,
    SettingsComponent,
    CommentsComponent,
    ChangePasswordComponent,
    UserCommentsComponent,
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
