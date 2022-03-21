import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserDetails } from 'src/app/services/model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private userId: number;
  public userDetails: UserDetails;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //get current user id
    this.userId = this.route.snapshot.params.id;

    //get user details data
    this.apiService.getUserDetails(this.userId).subscribe(data => {
      this.userDetails = data;
    });
  }

  public onButtonClick() {
    //navigate to user posts page
    this.router.navigateByUrl(`user/${this.userId}/posts`)
  }

  //navigate back
  public onBackClick() {
    this.router.navigateByUrl('user')
  }
}
