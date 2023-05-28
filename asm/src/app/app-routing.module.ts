import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';

const routes: Routes=[
    {path: '', component: HomepageComponent},
    {path:'product', component:ProductListComponent},
    {path:'product/detail/:id', component:ProductDetailComponent},
    {path: 'product/add', component: AddproductComponent},
    {path: 'product/edit/:id', component: UpdateProductComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }