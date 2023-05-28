import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import {ActivatedRoute} from '@angular/router'
import { ServiceComponent } from 'src/app/service/service.component';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product:Iproduct={
    name: "",
    price: 0
  }
  constructor(
    private router: ActivatedRoute, 
    private service: ServiceComponent){
      {
        this.router.paramMap.subscribe(param=>{
          const id = Number(param.get("id"));
          this.service.getOne(id).subscribe(product=> {
            this.product = product
          }, error => console.log(error))
        })
    }
    }
    onHandleSubmit(){
      this.service.update(this.product).subscribe(product=>{
        this.product=product
      })
    }
}
