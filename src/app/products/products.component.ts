import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = Products;
  
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      console.log(params);
    })

    let page = this.route.snapshot.queryParamMap.get('page');
    console.log("page: " + page);
  }

  loadProducts(){
    this.router.navigate(['/products'],{queryParams:{
      page:1
    }});
  }

}
