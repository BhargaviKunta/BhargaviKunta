import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CartComponent} from './components/cart/cart.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import {ProductManagerComponent} from './components/admin/product-manager/product-manager.component';
import {UserManagerComponent} from './components/admin/user-manager/user-manager.component';
import {AddUserComponent} from './components/admin/add-user/add-user.component';
import {AddProductCatagoryComponent} from './components/admin/add-product-catagory/add-product-catagory.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchComponent } from './components/search/search.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { AuthenticGuard } from './authentic.guard';
import { ReportComponent } from './components/report/report.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DiscountComponent } from './components/admin/discount/discount.component';

const routes: Routes = [
 
  {path: 'addproduct', component: AddProductComponent,pathMatch:'full'},
  {path: 'productmanager', component: ProductManagerComponent,pathMatch:'full'},
  {path: 'catagory', component: AddProductCatagoryComponent,pathMatch:'full'},
  {path: 'adduser', component: AddUserComponent,pathMatch:'full'},
  {path: 'usermanager', component: UserManagerComponent,pathMatch:'full'},
  {path: '', component: HomeComponent,pathMatch:'full'},
  {path: 'login', component: LoginComponent,pathMatch:'full'},
  {path: 'signup', component: RegisterComponent,pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent,pathMatch:'full',canActivate:[AuthenticGuard]},
  {path: 'wish', component: WishlistComponent,pathMatch:'full',canActivate:[AuthenticGuard]},
  {path: 'cart', component: CartComponent,pathMatch:'full',canActivate:[AuthenticGuard]},
  {path: 'productdetail', component:ProductDetailsComponent,pathMatch:'full'},
  {path: 'search', component:SearchComponent,pathMatch:'full'},
  {path: 'coupon', component:CouponComponent,pathMatch:'full'},
  {path: 'report', component:ReportComponent,pathMatch:'full'},
  {path: 'checkout', component:CheckoutComponent,pathMatch:'full'},
  {path: 'discount', component:DiscountComponent,pathMatch:'full'},
  {path: '**', redirectTo: '',pathMatch:'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
