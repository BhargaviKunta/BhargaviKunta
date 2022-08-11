import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductManagerComponent } from './components/admin/product-manager/product-manager.component';
import { UserManagerComponent } from './components/admin/user-manager/user-manager.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AddProductCatagoryComponent } from './components/admin/add-product-catagory/add-product-catagory.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReportComponent } from './components/report/report.component';
import { DiscountComponent } from './components/admin/discount/discount.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddProductComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDescriptionComponent,
    ProductManagerComponent,
    UserManagerComponent,
    AddUserComponent,
    AddProductCatagoryComponent,
    ProductDetailsComponent,
    CartComponent,
    SearchComponent,
    CouponComponent,
    WishlistComponent,
    AdminNavbarComponent,
    CheckoutComponent,
    ReportComponent,
    DiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
