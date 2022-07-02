import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/models/role';
import { ApiService } from 'src/app/services/api.service';

class DataTablesResponse {
  data: any[];
  draw: any;
  recordsFiltered: any;
  recordsTotal: any;
}

interface Person {
  user_name: string;
  email: string;
  unique_code: string;
  phone: string;
  client_name: string;
  user_id : any;
  file_status : any;
}


@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.scss']
})
export class AllRecordsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  userId : any;

  taxYear : any;

  persons: Person[] = [];

  constructor(private authService: AuthService, private router : Router, private http: HttpClient, private apiService : ApiService) {
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
            this.apiService.baseUrl +'/member/alluserslist',
            {dataTablesParameters, user_id : this.userId, taxYear : this.taxYear}, 
            {}
          )
          .subscribe(resp => {
            this.persons = resp.data;  
            console.log(location.origin);      
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'unique_code' }, { data: 'user_name' }, { data: 'email' }, 
                { data: 'phone' }, { data: 'file_status' } , { data: 'client_name' }]
    };
  }

  get isSuperAdmin() {
    return this.authService.hasRole((Role.SUPER_ADMIN).toString());
  }

}
