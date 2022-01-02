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
  user_name: any;
  filenumber: any;
  p_amount: any;
  t_order_id: any;
  tracking_id: any;
  bank_ref_no: any;
  order_status : any;
  o_created_at : any;
}


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  userId : any;

  taxYear : any;

  persons: Person[] = [];

  constructor(private authService: AuthService, private http: HttpClient, private apiService : ApiService) {
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
            this.apiService.baseUrl +'/user/allpayments',
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
      columns: [{ data: 'user_name' }, { data: 'filenumber' }, { data: 'p_amount' }, { data: 't_order_id' }, 
                { data: 'order_status' }, { data: 'o_created_at' }]
    };
  }

}
