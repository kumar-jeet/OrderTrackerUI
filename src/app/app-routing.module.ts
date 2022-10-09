import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard as Authguard } from './authentication.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:"full"
  },{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [Authguard] },
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), canActivate: [Authguard]  },
  { path: 'order', loadChildren: () => import('./add-order/add-order.module').then(m => m.AddOrderModule), canActivate: [Authguard]  },
  {
    path:'**',
    redirectTo:'login'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
