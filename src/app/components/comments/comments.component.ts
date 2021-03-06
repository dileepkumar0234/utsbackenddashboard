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
  user_id: any;
  f_unique_code: any;
  f_user_name: any;
  user_name: any;
  comment: any;
  previousstate: any;
  presentstate : any;
  cmt_created_at : any;
}


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

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
        this.http
          .post<DataTablesResponse>(
            this.apiService.baseUrl +'/member/allcomments',
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
      columns: [{ data: 'f_unique_code' }, { data: 'f_user_name' }, { data: 'user_name' }, 
                { data: 'comment' }, { data: 'previousstate' }, { data: 'presentstate' }, { data: 'cmt_created_at' }]
    };
  }

}
