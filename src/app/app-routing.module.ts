import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { AuthGuard } from './utils/auth-guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoriesListComponent, canActivate: [AuthGuard] },
  { path: 'categories/:id', component: CategoryDetailsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }