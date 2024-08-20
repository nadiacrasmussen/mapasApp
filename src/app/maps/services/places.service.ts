import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
public useLocation? :[number, number];
public isLoadingPlaces: boolean=false;
public places: Feature[] =[]


get isUserLocationReady():boolean{
  return !!this.useLocation;
}


  constructor(private http:HttpClient) { }

public async getUserLocation(): Promise<[number, number]>{

   return new Promise((resolve, reject) =>{

    navigator.geolocation.getCurrentPosition(
      ({coords}) =>{
        this.useLocation =[coords.longitude, coords.latitude];
        resolve(this.useLocation);
      },
      (err)=>{
        alert('No se pudo obtener la geolocalizacion')
          console.log(err);
          reject();

      }
    );
   });
}
getPlacesByQuery(query :string = ''){

  this.http.get<PlacesResponse>('https://api.mapbox.com/search/geocode/v6/forward?q=${query}&proximity=-58.74885713392945%2C-38.55691488555614&language=es&access_token=pk.eyJ1IjoibmFkaWFjcmFzbXVzc2VuIiwiYSI6ImNseGQzcHAydTAxdmEyanBvZXYweWd4ajUifQ.FmFbGTd6ad3BoZPX6aHNbg')
.subscribe(resp =>{
  console.log(resp.features)

  this.isLoadingPlaces=false;
  this.places=resp.features
});
}
}
