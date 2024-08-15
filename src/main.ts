import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { enableProdMode } from '@angular/core';

mapboxgl.accessToken = 'pk.eyJ1IjoibmFkaWFjcmFzbXVzc2VuIiwiYSI6ImNseGQ0cW02NTAyOHQyam9zaWM2YnZwN3AifQ.4sSNhwn7_vV9OhWyofSbrg';
if(!navigator.geolocation){
  alert('Navegador no soporta la geolocalizacion');
  throw new Error ('Navegador no soporta la geolocalizacion');
}

if(environment.production){
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
