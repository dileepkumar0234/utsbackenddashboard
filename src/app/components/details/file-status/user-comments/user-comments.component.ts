import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  user_name: any;
  comment: any;
  previousstate: any;
  presentstate : any;
  cmt_created_at : any;
}


@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  userId : any;

  client_id : any;

  taxYear : any;

  persons: Person[] = [];

  constructor( private route : ActivatedRoute, 
    private http : HttpClient, private apiService : ApiService, private authService : AuthService) { 
    this.client_id = this.route.snapshot.paramMap.get('id');
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
            this.apiService.baseUrl +'/member/usercomments',
            {dataTablesParameters, user_id : this.userId, taxYear : this.taxYear,  client_id : this.client_id}, 
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
      columns: [{ data: 'user_name' }, { data: 'previousstate' }, { data: 'presentstate' }, 
                { data: 'comment' }, { data: 'cmt_created_at' }]
    };
  }

}
