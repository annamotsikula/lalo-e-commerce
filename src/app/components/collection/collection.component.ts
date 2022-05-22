import { Component, Input, OnInit } from '@angular/core';
import { IDynamicCollection } from '../core/interfaces/collection.interface';

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
  product = {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
