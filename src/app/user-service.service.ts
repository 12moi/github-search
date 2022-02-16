import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repos } from './repos';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User;
  allRepos: Repos;
 

  constructor(private http: HttpClient) {
    this.foundUser = new User("","","",new Date,0,0,0,0,"");
    this.allRepos = new Repos("","","","",0,0,0, new Date);
  }

  searchUSer(searchName: string) {
   
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise<void>((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+environment.accessToken).toPromise().then(
        (result) => {
          // this.foundUser = result;
          console.log(this.foundUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getReopos(searchName: string){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise<void>((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.accessToken).toPromise().then(
        (results) => {
          // this.allRepos = results;
          // resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}
