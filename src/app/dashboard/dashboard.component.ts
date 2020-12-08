import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../Services/property-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  names: any;
  flag = 0;
  constructor(private propertyService: PropertyServiceService) {}

  ngOnInit(): void {
    this.propertyService.getPropertiesName().subscribe((result) => {
      console.log(result);

      this.names = result;
      this.flag = 1;
    });
  }
}
