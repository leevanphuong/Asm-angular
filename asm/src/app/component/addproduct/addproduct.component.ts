import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  product: Iproduct={
    name: "",
    price: 0
  }
  constructor(private service: ServiceComponent){}

  onHandleSubmit(){
    this.service.addproduct(this.product).subscribe(product=>{
      this.product=product
    })
  }
}
