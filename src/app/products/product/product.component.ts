import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct:any;
  id:number = 0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // let id = +this.route.snapshot.params['id'];
    // this.selectedProduct = Products.find(p => p.id === id);

    this.route.paramMap.subscribe(params => {
      const pId:any =  this.id < 1 ? params.get('id') : 0;
      this.selectedProduct = Products.find(p => p.id === +pId);
      console.log(pId)
    });
  }

}
