import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
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
  phoneext : any;
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

  analystList : any;

  myAnalystForm : FormGroup = new FormGroup({});

  constructor(private http: HttpClient ,
    private authService : AuthService,
    private apiService : ApiService,
    private commonService : CommonService,
    private formBuilder : FormBuilder) {

    this.userId = this.authService.getUserId();

    this.taxYear = this.authService.getTaxYear();

    this.myAnalystForm = this.formBuilder.group({
      unlists_u_id: ['', [Validators.required]],
    })

   }

  ngOnInit(): void {
    if (this.fileState == 0 )
    {
      this.getAnalysts();
    }
    this.getTableData();
  }

  assignFile(e : any, client_id : any)
  {
    if (confirm("Please confirm to assign"))
    {
      this.apiService.postCall('/member/assgintousertoanaylst', {client_id : client_id, unlists_u_id : e.target.value })
      .subscribe(
        res => {
          this.commonService.refresh();
        },
        error => {
        }
      )
    }
  }

  getAnalysts()
  {
    this.apiService.postCall('/member/getanalystusers', {})
    .subscribe(
      res => {
        if (res.analystusers)
        {
          this.analystList = res.analystusers;
        }
      },
      error => {
      }
    )
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
            this.apiService.baseUrl +'/member/commonprocessingclientdata',
            {dataTablesParameters, user_id : this.userId, taxYear : this.taxYear, filestate : this.fileState},
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
      columns: [{ data: 'unique_code' }, { data: 'user_name' }, { data: 'email' }, { data: 'phoneext' },
                { data: 'phone' }, { data: 'file_status' }]
    };
  }
}
