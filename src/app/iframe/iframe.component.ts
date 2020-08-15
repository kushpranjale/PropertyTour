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
  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.paramMap.subscribe((paraMaps: ParamMap) => {
      this.id = paraMaps.get('id');
      console.log(this.id);

      if (this.id) {
        console.log(this.id);
        this.product = this.id;
      } else {
      }
    });
  }
}
