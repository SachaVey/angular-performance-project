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
    return this.http.get<T>(environment.stateURL).pipe(
      map( res => res = res['response'])
    );
  }

  getAllStations<T>(stateName: string): Observable<T> {
    return this.http.post<T>(environment.allStationsFromState, {name: stateName}).pipe(
      map( res => res = res['response'])
    );
  }
}
