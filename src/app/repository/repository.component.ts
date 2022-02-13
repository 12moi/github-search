import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { UserServiceService } from '../user-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo!: Repos;
  constructor( public repoService: UserServiceService, private http:HttpClient) { }
 
  repoSearch(searchName: any){
    this.repoService['getRepos'](searchName).then(
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
