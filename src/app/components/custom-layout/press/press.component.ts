import { Component, OnInit } from '@angular/core';
import { ICard } from '../../core/interfaces/product.interface';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {
  journalList: ICard[] =  [
    { title: 'Marie Clarie', 
      src: '/assets/media/press/marie-claire.png'
    },
    {title: 'bazar', src: '/assets/media/press/bazar.png'},
    {title: 'cosmo', src: '/assets/media/press/cosmo.png'},
    {title: 'the times', src: '/assets/media/press/times.png'},
    {title: 'vogue', src: '/assets/media/press/vogue.png'},
    {title: 'grazia', src: '/assets/media/press/grazia.png'}
  ]

  constructor() { }
  ngOnInit(): void {
    this.journalList.forEach(i=> i.title = i.title.toUpperCase())
  }

}
