import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  selectedProduct:any;
  id:number = 0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pId:any =  this.id < 1 ? params.get('id') : 0;
      this.selectedProduct = Products.find(p => p.id === +pId);
      console.log(pId)
    });
  }

}
