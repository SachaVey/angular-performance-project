import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getAll<T>(): Observable<T> {
    return this.http.get<T>(environment.stationURL);
  }

  getAllStates<T>(): Observable<T> {
    return this.http.get<T>(environment.stateURL);
  }

  getAllStations<T>(stateName: string): Observable<T> {
    return this.http.get<T>(`${environment.stationURL}?bundesland=${stateName}`);
  }
}
