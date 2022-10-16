import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assigned-file-number',
  templateUrl: './assigned-file-number.component.html',
  styleUrls: ['./assigned-file-number.component.scss']
})
export class AssignedFileNumberComponent implements OnInit {

  userList : any;
  userLists : any;
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.getExistingUsers();
  }

  getExistingUsers()
  {
    this.apiService.postCall('/member/existingassignfilenumber', {})
    .subscribe(
      res => {
        if (res.oldusers)
        {
          this.userLists = res.oldusers;
        }

      },
      error => {

      }
    )
  }
}
