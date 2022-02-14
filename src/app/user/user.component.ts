import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Repos } from '../repos';
 import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import {  } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;
  repo!: Repos;
  repoService: any;
 
  private username!:string;
  private clientid!:'';
  private clientSecret!:'';
  constructor(public myService: UserServiceService, private Repo: UserServiceService, ) {
    
  }
  getUser(){
    return User;
  }
  getUserRepo(){
    return this.Repo;
  }
  
   search(searchName: any) {
    
   }

  ngOnInit(): void {
    this.search('12moi');
  }

}
