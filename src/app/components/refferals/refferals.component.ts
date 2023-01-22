import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DataTablesResponse } from 'src/app/objects/dataTableResponse';
import { Referral } from 'src/app/objects/refferal';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-refferals',
  templateUrl: './refferals.component.html',
  styleUrls: ['./refferals.component.scss']
})
export class RefferalsComponent implements OnInit {
  sucess_message:any;
  displayStyle="block";
  commitmes:any;
  dtOptions: DataTables.Settings = {};

  userId : any;

  taxYear : any;

  referrals : Referral[] = [];

  constructor(private http : HttpClient, private apiService : ApiService, private authService : AuthService,
    private commonService : CommonService) {
    this.userId = this.authService.getUserId();
    this.taxYear = this.authService.getTaxYear();
  }

  ngOnInit(): void {
    this.getRefferals();
  }

  getRefferals()
  {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            this.apiService.baseUrl +'/user/refferalslist',
            {dataTablesParameters, user_id : this.userId, taxYear : this.taxYear},
            {}
          )
          .subscribe(resp => {
            this.referrals = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      }
    };
  }
  OnViewModal(comment : any)
  {
    this.sucess_message = comment;
    this.commitmes= comment;
  }
  closePopup() {
    this.commonService.refresh();
    this.displayStyle = "none";
    this.sucess_message = "";
  }
}
