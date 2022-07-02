import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface Person {
  userid: any;
  username: string;
  userfilename: string;
  useremail: string;
  userphone: string;
  filestatus: string;
  file_status:any;
  createdat : any;
}

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.scss']
})
export class LoginHistoryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  persons: Person[] = [];

  userId : any;

  taxYear : any;

  constructor(private http : HttpClient, private authService : AuthService, private apiService : ApiService) { 
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
            this.apiService.baseUrl +'/user/loginshistory',
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
      columns: [{ data: 'userfilename' }, { data: 'username' }, { data: 'useremail' }, 
                { data: 'userphone' }, { data: 'filestatus' } , { data: 'createdat' }]
    };
  }


}
