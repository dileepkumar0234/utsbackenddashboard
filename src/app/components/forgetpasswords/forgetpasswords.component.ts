import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface Person {
  unique_code: any;
  user_id: any;
  user_name: string;
  email: string;
  phone: string;
  phoneext: string;
  createdat: any;
}

@Component({
  selector: 'app-forgetpasswords',
  templateUrl: './forgetpasswords.component.html',
  styleUrls: ['./forgetpasswords.component.scss']
})
export class ForgetpasswordsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  persons: Person[] = [];

  userId : any;

  taxYear : any;

  constructor(private http : HttpClient, private authService : AuthService, private apiService : ApiService,
    private commonService : CommonService) {
    this.userId = this.authService.getUserId();

    this.taxYear = this.authService.getTaxYear();

  }

  ngOnInit(): void {

    this.getTableData();
  }

  getTableData()
  {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            this.apiService.baseUrl +'/user/forgetlinks',
            {dataTablesParameters, user_id : this.userId, taxYear : this.taxYear},
            {}
          )
          .subscribe(resp => {
            this.persons = resp.data;
            console.log(this.persons);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'unique_code' }, { data: 'user_name' }, { data: 'email' },{ data: 'phone' }, { data: 'createdat' }]
    };
  }
  
  OnDeleteForget(userId : any)
  {
    if (confirm("Please confirm to delete"))
    {
      this.apiService.postCall('/user/deleteforgetuser', {u_id : userId})
      .subscribe(
        res => {
          this.commonService.refresh();
        },
        error => {
          this.commonService.refresh();
        }
      )
    }

  }

}
