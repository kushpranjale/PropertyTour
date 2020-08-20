import { PropertyServiceService } from './../Services/property-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  id: any;
  product: any;
  property: any;
  names: any;
  constructor(
    private routes: ActivatedRoute,
    private propertyService: PropertyServiceService
  ) {}

  ngOnInit(): void {
    this.routes.paramMap.subscribe((paraMaps: ParamMap) => {
      this.id = paraMaps.get('id');
      console.log(this.id);

      if (this.id) {
        console.log(this.id);
        this.product = this.id;
        this.propertyService.getProperty(this.id).subscribe((result) => {
          this.property = result[0];
          console.log(result);
        });
      } else {
        this.propertyService.getPropertiesName().subscribe((result) => {
          this.names = result;
          console.log(this.names);
        });
      }
    });
  }
}
