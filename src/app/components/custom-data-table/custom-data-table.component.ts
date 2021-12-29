import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-custom-data-table',
  templateUrl: './custom-data-table.component.html',
  styleUrls: ['./custom-data-table.component.scss']
})
export class CustomDataTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  // persons: Person[];

  constructor(private http: HttpClient,private apiService : ApiService) { }
  user_id  : any;

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            this.apiService.baseUrl + '/user/refferalslist',
            {dataTablesParameters , user_id : localStorage.getItem(environment.authToken) }, { }
          ).subscribe((resp : any) => {
            // console.log(resp); return false;
            // that.persons = resp.data;
            // console.log(that.persons);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'rf_on_name' }, { data: 'rf_on_email' }, { data: 'rf_name' }, { data: 'rf_email' }, { data: 'rf_phone' }, { data: 'rf_comment' }]
    };
  }

}
