import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  [x: string]: User;
  
  constructor() { 
           
  }
}
