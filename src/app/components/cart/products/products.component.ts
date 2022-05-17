import { Component, OnInit } from '@angular/core';
interface IFilter {
  title: string,
  items: string[]
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filterData: IFilter[] = [
    {
      title: 'Category',
      items: ['All', 'Coats', 'Dresses','Shorts', 'Sweaters', 'Skirts', 'Jackets', 'Tops', 'Vests', 'Cardigans', 'Playsuit', 'Pants']
    },
    { title: 'Color',
      items: ['All']
    },
    { title: 'Size',
      items: ['All']
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
