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
  rf_on_name: string;
  rf_on_email: string;
  rf_on_phone: string;
  rf_name: string;
  rf_email: string;
  rf_phone: string;
  rf_comment: string;
  rf_year: string;
}

@Component({
  selector: 'app-custom-data-table',
  templateUrl: './custom-data-table.component.html',
  styleUrls: ['./custom-data-table.component.scss']
})

export class CustomDataTableComponent implements OnInit {

  @Input() type : any;

  dtOptions: DataTables.Settings = {};

  userId : any;

  taxYear : any;

  persons: Person[];

  constructor(private http: HttpClient , 
    private authService : AuthService,
    private apiService : ApiService) {

    this.userId = this.authService.getUserId();
    
    this.taxYear = this.authService.getTaxYear() ? this.authService.getTaxYear() : '2018';
   }

  ngOnInit(): void {
    console.log(this.type);
    // // debugger;
    switch(this.type)
    {
      case "/all-records":
        this.getAllRecords();
        break;
    }
    
  }
  getAllRecords()
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
            'http://3.111.6.221:8626/api/user/refferalslist',
            {dataTablesParameters, user_id : this.userId, taxYear : 2018}, 
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
      columns: [{ data: 'rf_on_name' }, { data: 'rf_on_email' }, { data: 'rf_on_phone' }, 
                { data: 'rf_name' }, { data: 'rf_email' }, { data: 'rf_phone' } , { data: 'rf_comment' }]
    };
  }
}
