import { Component, Input, OnInit } from '@angular/core';
import { RouteStop } from '../api.service';

@Component({
  selector: 'route-item',
  templateUrl: './route-item.component.html',
  styleUrls: ['./route-item.component.scss']
})
export class RouteItemComponent implements OnInit {
  @Input() stop: RouteStop | undefined;
  @Input() stopNumber: number | undefined;
  @Input() stopType: 'loading' | 'unloading' = 'loading';
  @Input() lastStop: boolean = false;
  @Input() active: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
