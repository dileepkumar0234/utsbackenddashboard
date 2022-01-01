import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependents-info',
  templateUrl: './dependents-info.component.html',
  styleUrls: ['./dependents-info.component.scss']
})
export class DependentsInfoComponent implements OnInit {

  @Input() dependentsList : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
