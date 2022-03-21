import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  users: any = [];

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => this.users = data)
  }

  onUserClick(id: number) {
    this.router.navigateByUrl(`user/${id}`)
  }

}
