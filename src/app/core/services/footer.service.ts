import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../config/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService extends api {

  constructor(private http:HttpClient) {super() }
  getfooter():Observable<any>{
    return this.http.get(this.url+"/getfooter")
  }
}
