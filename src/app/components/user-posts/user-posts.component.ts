import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserDetails, UserPosts } from 'src/app/services/model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  private userId: number;
  public posts: UserPosts[];
  public userDetails: UserDetails;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;

    this.getUserDetails();
    this.getUserPosts();
  }

  //get user posts
  private getUserPosts() {
    this.apiService.getUserPosts(this.userId).subscribe(data => {
      this.posts = data;
    })
  }

  //get user details
  private getUserDetails() {
    this.apiService.getUserDetails(this.userId).subscribe(data => {
      this.userDetails = data;
    })
  }

  //navigate back
  public onBackClick() {
    this.router.navigateByUrl(`user/${this.userId}`)
  }
}
