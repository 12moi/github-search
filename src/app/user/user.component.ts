import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
 import { User } from '../user';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;
  repo!: Repos;
  repoService: any;
  constructor(public myService: UserServiceService, private Repo: UserServiceService) {
  }

  searchs(searchName: any) {
    this.myService['searchUSer'](searchName).then(
      (success: any)=>{
        this.user = this.myService['foundUser'];
      },
      (error: any)=>{
        console.log(error)
      }
    );
      this.repoService.getReopos(searchName).then(
        (results: any)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error: any)=>{
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.searchs('12moi');
  }

}
