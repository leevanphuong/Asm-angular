import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  products: Iproduct[]= [];
  constructor(private service: ServiceComponent){
  this.service.getAll().subscribe(data=>{
    this.products=data
  }, error=> console.log(error))
  }
  removeitem(id:any){
    this.service.remove(id).subscribe(()=>{
      this.products = this.products.filter(item=>item.id !=id)
    })
  }

}
