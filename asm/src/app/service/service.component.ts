import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Iproduct } from "../interface/product";
import {Observable} from 'rxjs'
@Injectable({
  providedIn: "root"
})
export class ServiceComponent {
  constructor( private http: HttpClient){}
  getAll() :Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`http://localhost:3000/products`)
  }
  getOne(id:number): Observable<Iproduct>{
    return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  remove(id:number): Observable<Iproduct>{
    return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  update(product:Iproduct): Observable<Iproduct>{
    return this.http.put<Iproduct>(`http://localhost:3000/products/${product.id}`,product)
  }
  addproduct(product:Iproduct): Observable<Iproduct>{
    return this.http.post<Iproduct>(`http://localhost:3000/products/`, product)
  }
}
