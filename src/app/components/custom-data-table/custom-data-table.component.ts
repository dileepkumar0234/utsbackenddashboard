import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface Person {
  unique_code: string;
  user_name: string;
  email: string;
  phone: string;
  file_status: string;
  user_id : any;
}

@Component({
  selector: 'app-custom-data-table',
  templateUrl: './custom-data-table.component.html',
  styleUrls: ['./custom-data-table.component.scss']
})

export class CustomDataTableComponent implements OnInit {

  @Input() fileState : any;

  dtOptions: DataTables.Settings = {};

  userId : any;

  taxYear : any;

  persons: Person[] = [];
  
  constructor(private http: HttpClient , 
    private authService : AuthService,
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
        console.log('All Params', dataTablesParameters);
        this.http
          .post<DataTablesResponse>(
            this.apiService.baseUrl +'/member/commonprocessingclientdata',
            {dataTablesParameters, user_id : this.userId, taxYear : this.taxYear, filestate : this.fileState}, 
            {}
          )
          .subscribe(resp => {
            this.persons = resp.data;
            console.log(resp);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'unique_code' }, { data: 'user_name' }, { data: 'email' }, 
                { data: 'phone' }, { data: 'file_status' }]
    };
  }
}
