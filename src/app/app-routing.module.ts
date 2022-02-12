

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  
  {path:"search-repo", component:RepositoryComponent},
  {path: "", redirectTo:"/user-profile", pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
