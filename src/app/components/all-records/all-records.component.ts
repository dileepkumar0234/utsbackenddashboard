import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.scss']
})
export class AllRecordsComponent implements OnInit {

  
  constructor(private router : Router, private http: HttpClient, private apiService : ApiService) { }

  ngOnInit(): void {
    
  }
  get type()
  {
    return this.router.url;
  }
}
