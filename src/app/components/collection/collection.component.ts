import { Component, Input, OnInit } from '@angular/core';
import { IDynamicCollection } from '../core/interfaces/collection.interface';
import { ICard } from '../core/interfaces/product.interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @Input() collection_data : IDynamicCollection = {
    headerText: '',
    subText: '',
    buttonText: ''
  }
  @Input() collection_list: ICard[] = [] 
  constructor() { }

  ngOnInit(): void {
  }

}
