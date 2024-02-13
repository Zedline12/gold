import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../config/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService extends api {

  constructor(private http:HttpClient) {super() }

  getusd():Observable<any>{
    return this.http.get(this.url+"/getusd")
  }
  getsar():Observable<any>{
    return this.http.get(this.url+"/getsar")
  }
  getusdhistory():Observable<any>{
    return this.http.get(this.url+"/getusdhistory")
  }
  getsarhistory():Observable<any>{
    return this.http.get(this.url+"/getsarhistory")
  }
  getconstants():Observable<any>{
    return this.http.get(this.url+"/admin/getconstants")
  }
}
