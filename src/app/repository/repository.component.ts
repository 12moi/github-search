import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo!: Repos;
  constructor( public repoService: UserServiceService ) { }

  repoSearch(searchName: any){
    this.repoService['getReopos'](searchName).then(
      (results: any)=>{
        this.repo =this.repoService['allRepos']
        console.log(this.repo);
      },
      (error: any)=>{
        console.log(error);
      }
    );
  }

 

  ngOnInit(): void {
  }

}
