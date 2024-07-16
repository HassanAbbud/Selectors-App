import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _regions: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ];

  constructor() { }

  get regions(): Region[] {
    return [ ...this._regions ];
  }

  //http request countries API
  getCountryByRegion(region: Region): SmallCountry[]{
    return []
  }
}
