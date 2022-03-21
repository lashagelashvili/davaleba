import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserDetails } from 'src/app/services/model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: UserDetails[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    //get users list
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  public onUserClick(id: number) {
    //navigate to user detail page
    this.router.navigateByUrl(`user/${id}`)
  }
}
