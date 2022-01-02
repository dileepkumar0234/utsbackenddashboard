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
  contact_id: any;
  c_name: any;
  c_email: any;
  c_phone: any;
  c_message: any;
  c_created_at: any;
}


@Component({
  selector: 'app-to-call',
  templateUrl: './to-call.component.html',
  styleUrls: ['./to-call.component.scss']
})
export class ToCallComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  userId : any;

  taxYear : any;

  persons: Person[] = [];
  
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
            this.apiService.baseUrl +'/user/wantusinfo',
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
      columns: [{ data: 'c_name' }, { data: 'c_email' }, { data: 'c_phone' }, 
                { data: 'c_message' }, { data: 'c_created_at' }]
    };
  }

  OnDelete(contactId : any)
  {
    if (confirm("Please confirm to delete"))
    {
      this.apiService.postCall('/user/deletewantuscall', {contactid : contactId})
      .subscribe(
        res => {
          this.commonService.refresh();
        },
        error => {
        }
      )
    }

  }
}
