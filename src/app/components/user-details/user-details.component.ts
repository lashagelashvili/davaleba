import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserDetails } from 'src/app/services/model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentId: number;
  userDetails: UserDetails;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentId = this.route.snapshot.params.id;

    this.apiService.getUserDetails(this.currentId).subscribe(data => {
      this.userDetails = data;
      console.log(this.userDetails)
    });
  }

  onButtonClick() {
    this.router.navigateByUrl(`user/${this.currentId}/posts`)
  }
}
