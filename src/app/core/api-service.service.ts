import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll() {
    console.log('Test');
    return this.http.get(environment.stationURL);
  }

  getAllFederalStates() {
    return this.http.get(environment.stateURL).pipe(
      map(
        (res: any) => res = res.response
      )
    );
  }

  getAllStations<T>(stateName: string): Observable<T> {
    return this.http.post<T>(environment.allStationsFromState, { name: stateName }).pipe(
      map(
        (res: any) => res = res.response
      )
    );
  }
}
