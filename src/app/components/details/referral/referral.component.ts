import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { DataTablesResponse } from 'src/app/objects/dataTableResponse';
import { Referral } from 'src/app/objects/refferal';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  userId : any;

  client_id : any;

  taxYear : any;
  
  referrals : Referral[];
  constructor( private route : ActivatedRoute, 
    private http : HttpClient, private apiService : ApiService, private authService : AuthService) { 
    this.referrals = [];
    this.client_id = this.route.snapshot.paramMap.get('id');
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
            this.apiService.baseUrl +'/member/refferalslist',
            {dataTablesParameters, user_id : this.userId, taxYear : this.taxYear, client_id : this.client_id}, 
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
      },
      columns: [{ data: 'rf_on_name' }, { data: 'rf_on_email' }, { data: 'rf_on_phone' }, 
                { data: 'rf_name' }, { data: 'rf_email' }, { data: 'rf_phone' } , { data: 'rf_comment' }]
    };
  }
}
