import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomepageComponent,
    AddproductComponent,
    UpdateProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
