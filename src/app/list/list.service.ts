import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  List() {
    return this.http.get<any[]>(`${environment.apiUrl}/Users`);
  }

  Remove(id) {
    return this.http.delete(`${environment.apiUrl}/Users/${id}`);
  }

}
