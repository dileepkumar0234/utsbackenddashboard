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
  firstname: any;
  lastname: any;
  emailaddress: any;
  phone: any;
  message: any;
  createdat: any;
  phoneext: any;
  id: any;
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  userId : any;
  taxYear : any;
  constructor(private http: HttpClient ,
    private authService : AuthService,
    private commonService : CommonService,
    private apiService : ApiService) {
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
            this.apiService.baseUrl +'/user/careerslist',
            {dataTablesParameters, user_id : this.userId, taxYear : this.taxYear},
            {}
          )
          .subscribe(resp => {
            this.persons = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'firstname' }, { data: 'lastname' }, { data: 'emailaddress' }, { data: 'phone' },
                { data: 'message' }, { data: 'createdat' }]
    };
  }

  OnDelete(careerId : any)
  {
    if (confirm("Please confirm to delete"))
    {
      this.apiService.postCall('/user/deletecareer', {careerid : careerId})
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
