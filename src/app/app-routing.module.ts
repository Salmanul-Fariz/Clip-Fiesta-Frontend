import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/user-pages/home/home.component';
import { UserPagesComponent } from './user/user-pages/user-pages.component';

const routes: Routes = [
  // user pages
  {
    path: '',
    children: [
      {
        path: '',
        component: UserPagesComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
