import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PropertyServiceService {
  constructor(private http: HttpClient) {}

  getProperty(property_name: string) {
    return this.http.get(
      'https://whispering-eyrie-36372.herokuapp.com/get_property/' +
        property_name
    );
  }
  getPropertiesName() {
    return this.http.get(
      'https://whispering-eyrie-36372.herokuapp.com/properties_name'
    );
  }
}
