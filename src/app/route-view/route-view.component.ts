import { Component, OnInit } from '@angular/core';
import { ApiService, RouteStop, RouteData } from '../api.service';

@Component({
  selector: 'route-view',
  templateUrl: './route-view.component.html',
  styleUrls: ['./route-view.component.scss']
})
export class RouteViewComponent implements OnInit {
  loadingStops: RouteStop[] = [];
  unloadingStops: RouteStop[] = [];
  totalStops: number = 0;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getRoutes().then((data: RouteData) => {
     this.loadingStops = data.loading
     this.unloadingStops = data.unloading
     this.totalStops = this.loadingStops.length + this.unloadingStops.length;
    })
  }
}
