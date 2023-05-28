import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ServiceComponent } from 'src/app/service/service.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
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
}
