import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularyService {

  constructor(private http: HttpClient) { }

  GetById(id) {
    return this.http.get(`${environment.apiUrl}/Users/${id}`);
  }

  Add(form) {
    form.id = 0;
    return this.http.post(`${environment.apiUrl}/Users/`, form);
  }

  Edit(form) {
    return this.http.put(`${environment.apiUrl}/Users/`, form);
  }
}
